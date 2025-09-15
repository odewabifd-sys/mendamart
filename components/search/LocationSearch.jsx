import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function LocationSearch({ onSearch }) {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [towns, setTowns] = useState([]);
  const [selectedTown, setSelectedTown] = useState("");
  const [serviceType, setServiceType] = useState("");

  useEffect(() => {
    async function fetchStates() {
      const { data, error } = await supabase
        .from("nigerian_locations")
        .select("state")
        .order("state")
        .group("state");
      if (data) {
        setStates(data.map((item) => item.state));
      }
    }
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      async function fetchTowns() {
        const { data, error } = await supabase
          .from("nigerian_locations")
          .select("town")
          .eq("state", selectedState)
          .order("town");
        if (data) {
          setTowns(data.map((item) => item.town));
        }
      }
      fetchTowns();
    } else {
      setTowns([]);
      setSelectedTown("");
    }
  }, [selectedState]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        state: selectedState,
        town: selectedTown,
        service: serviceType,
      });
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl mx-auto flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Find the perfect artisan
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        {/* State Dropdown */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="">Select a State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        {/* Town Dropdown */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Town
          </label>
          <select
            value={selectedTown}
            onChange={(e) => setSelectedTown(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            disabled={!selectedState}
          >
            <option value="">Select a Town</option>
            {towns.map((town) => (
              <option key={town} value={town}>
                {town}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Service Type Input */}
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Service Type (e.g., Plumber, Carpenter)
        </label>
        <input
          type="text"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          placeholder="e.g., Plumber"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
        />
      </div>
      {/* Search Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Search for Artisan
      </button>
    </form>
  );
}