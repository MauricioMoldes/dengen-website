import React, { useState, useEffect, useCallback } from "react";
import Layout from "./LayoutPage";

const PAGE_SIZE = 25;    // rows shown per page
const FETCH_SIZE = 200;  // rows fetched per API call
const BASE = "https://dengen.dk/api/qc";

const QCLandingPage = () => {
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);          // UI page (25 rows)
  const [apiOffset, setApiOffset] = useState(0); // current API window start
  const [searchMode, setSearchMode] = useState(false);

  // -------------------------
  // FETCH A WINDOW OF DATA
  // -------------------------
  const fetchWindow = useCallback((offset) => {
    setLoading(true);
    setError(false);
    fetch(`${BASE}?limit=${FETCH_SIZE}&offset=${offset}`)
      .then((res) => res.json())
      .then((json) => {
        setRows(Array.isArray(json?.data) ? json.data : []);
        setTotal(json?.total ?? 0);
        setApiOffset(offset);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchWindow(0);
  }, [fetchWindow]);

  // -------------------------
  // SEARCH
  // -------------------------
  useEffect(() => {
    if (!query) {
      if (searchMode) {
        setSearchMode(false);
        setPage(0);
        fetchWindow(0);
      }
      return;
    }

    setSearchMode(true);
    const timeout = setTimeout(() => {
      fetch(`${BASE}/search?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((json) => {
          setRows(Array.isArray(json?.data) ? json.data : []);
          setTotal(json?.count ?? 0);
          setPage(0);
          setLoading(false);
        })
        .catch(() => {
          setRows([]);
          setLoading(false);
        });
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  // -------------------------
  // PAGINATION LOGIC
  // -------------------------
  // In search mode: paginate over search results client-side
  // In browse mode: paginate client-side within the 200-row window,
  //   and fetch a new window when the user reaches the boundary.

  const totalPages = searchMode
    ? Math.ceil(rows.length / PAGE_SIZE)
    : Math.ceil(total / PAGE_SIZE);

  const globalPageStart = page * PAGE_SIZE; // absolute row index across all 24K
  const localStart = globalPageStart - apiOffset;
  const localEnd = localStart + PAGE_SIZE;
  const pageRows = rows.slice(localStart, localEnd);

  const handlePrev = () => {
    const newPage = page - 1;
    const newGlobalStart = newPage * PAGE_SIZE;
    if (!searchMode && newGlobalStart < apiOffset) {
      const newOffset = Math.max(0, apiOffset - FETCH_SIZE);
      fetchWindow(newOffset);
    }
    setPage(newPage);
  };

  const handleNext = () => {
    const newPage = page + 1;
    const newGlobalStart = newPage * PAGE_SIZE;
    if (!searchMode && newGlobalStart >= apiOffset + FETCH_SIZE) {
      fetchWindow(apiOffset + FETCH_SIZE);
    }
    setPage(newPage);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setPage(0);
  };

  const handleClear = () => {
    setQuery("");
    setPage(0);
  };

  // Display range for footer
  const displayStart = searchMode ? page * PAGE_SIZE + 1 : globalPageStart + 1;
  const displayEnd = searchMode
    ? Math.min((page + 1) * PAGE_SIZE, rows.length)
    : Math.min(globalPageStart + PAGE_SIZE, total);
  const displayTotal = searchMode ? rows.length : total;

  // -------------------------
  // RENDER
  // -------------------------
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="container mx-auto max-w-6xl">

          {/* HEADER */}
          <div className="bg-white shadow-sm rounded-lg p-5 mb-4 text-center">
            <div className="text-3xl text-green-600 mb-1">📊</div>
            <h1 className="text-lg font-semibold text-gray-800">DenGen QC Browser</h1>
            <p className="text-sm text-gray-500 mt-1">
              24K sample cohort · FastQC · Alignment · Variants · SV
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Total samples</div>
              <div className="text-xl font-medium text-gray-800">
                {total.toLocaleString()}
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">
                {searchMode ? "Search results" : "Loaded window"}
              </div>
              <div className="text-xl font-medium text-gray-800">
                {loading ? "—" : rows.length.toLocaleString()}
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Page</div>
              <div className="text-xl font-medium text-gray-800">
                {loading ? "—" : `${page + 1} / ${totalPages || 1}`}
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Status</div>
              <div className="flex items-center mt-1 gap-2">
                <span
                  className={`w-2 h-2 rounded-full inline-block ${
                    error
                      ? "bg-red-400"
                      : loading
                      ? "bg-yellow-400 animate-pulse"
                      : "bg-green-400"
                  }`}
                />
                <span className="text-sm text-gray-700">
                  {error ? "Error" : loading ? "Loading..." : searchMode ? "Search" : "Live"}
                </span>
              </div>
            </div>
          </div>

          {/* SEARCH */}
          <div className="relative mb-4">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
              🔍
            </span>
            <input
              className="w-full h-10 pl-9 pr-10 border border-gray-200 rounded-lg text-sm bg-white shadow-sm focus:outline-none focus:border-gray-400 placeholder-gray-400"
              placeholder="Search by sample ID, e.g. DENGEN000012345"
              value={query}
              onChange={handleQueryChange}
              autoComplete="off"
            />
            {query && (
              <button
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* TABLE */}
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">

            {/* TABLE HEADER */}
            <div className="grid grid-cols-4 bg-gray-900 text-white px-4 py-3">
              <div className="text-xs font-medium uppercase tracking-wider">Sample ID</div>
              <div className="text-xs font-medium uppercase tracking-wider">FastQC</div>
              <div className="text-xs font-medium uppercase tracking-wider">Alignment</div>
              <div className="text-xs font-medium uppercase tracking-wider">Variants / SV</div>
            </div>

            {/* TABLE BODY */}
            {loading ? (
              <div className="text-center py-16 text-gray-400 text-sm">
                Loading QC data...
              </div>
            ) : error ? (
              <div className="text-center py-16 text-red-400 text-sm">
                Failed to load data.{" "}
                <button
                  onClick={() => fetchWindow(apiOffset)}
                  className="underline text-red-500 hover:text-red-700"
                >
                  Retry
                </button>
              </div>
            ) : pageRows.length === 0 ? (
              <div className="text-center py-16 text-gray-400 text-sm">
                No samples found
              </div>
            ) : (
              pageRows.map((row, index) => {
                const id = row.sampleId || "NA";
                return (
                  <div
                    key={id}
                    className={`grid grid-cols-4 px-4 py-3 border-b border-gray-100 items-center hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <div className="font-mono text-sm text-gray-800">{id}</div>

                    <div className="flex gap-2">
                      <a
                        href={`/qc/fastqc/${id}/r1`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs px-2.5 py-1 rounded-md border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                      >
                        R1
                      </a>
                      <a
                        href={`/qc/fastqc/${id}/r2`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs px-2.5 py-1 rounded-md border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                      >
                        R2
                      </a>
                    </div>

                    <div>
                      <a
                        href={`/alignments/${id}`}
                        className="inline-flex items-center text-xs px-2.5 py-1 rounded-md border border-green-200 bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                      >
                        Alignment
                      </a>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={`/variant/${id}`}
                        className="inline-flex items-center text-xs px-2.5 py-1 rounded-md border border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                      >
                        SNP
                      </a>
                      <a
                        href={`/structural-variant/${id}`}
                        className="inline-flex items-center text-xs px-2.5 py-1 rounded-md border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 transition-colors"
                      >
                        SV
                      </a>
                    </div>
                  </div>
                );
              })
            )}

            {/* PAGINATION */}
            {!loading && !error && rows.length > 0 && (
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50">
                <span className="text-sm text-gray-500">
                  Showing {displayStart.toLocaleString()}–{displayEnd.toLocaleString()} of{" "}
                  {displayTotal.toLocaleString()}
                  {searchMode ? " results" : " samples"}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={page === 0}
                    className="px-3 py-1.5 text-sm border border-gray-200 rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-default transition-colors"
                  >
                    ← Prev
                  </button>
                  <span className="text-sm text-gray-500 min-w-[90px] text-center">
                    Page {page + 1} of {totalPages.toLocaleString()}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={page >= totalPages - 1}
                    className="px-3 py-1.5 text-sm border border-gray-200 rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-default transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default QCLandingPage;