import React, { useState, useEffect } from "react";

function TransactionHistory({ transactions, currencySymbol = "Php", itemsPerPage = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedTransactions, setPaginatedTransactions] = useState([]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  useEffect(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    setPaginatedTransactions(transactions.slice(startIdx, endIdx));
  }, [transactions, currentPage, itemsPerPage]);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Transaction History</h3>
      <div className="overflow-auto" style={{ maxHeight: '400px' }}>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Date</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTransactions.map((transaction, index) => (
              <tr key={index}>
                <td className="border p-2">{formatDate(transaction.date)}</td>
                <td className="border p-2">{transaction.description}</td>
                <td className="border p-2">{currencySymbol}{transaction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between">
        <button 
          className="p-2 border rounded"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          className="p-2 border rounded"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TransactionHistory;