import React from 'react';
import StudentLayout from '../../layouts/studentLayout';

const RulesOnConduct = () => {
  // Actual TUP Major Offenses from original code
  const majorOffenses = [
    { title: "Liquor and Prohibited Drugs", first: "15 days Suspension", second: "30 days Suspension", third: "1 sem Suspension" },
    { title: "Possession of Prohibited Drugs", first: "Dismissal", second: "-", third: "-" },
    { title: "Illegal Assemblies/Rallies", first: "15 days Suspension", second: "30 days Suspension", third: "1 sem Suspension" }
  ];

  // Actual TUP Minor Offenses from original code
  const minorOffenses = [
    { title: "Loitering/Disturbance", first: "Warning/Apology", second: "10-20 hrs Community Service", third: "30-50 hrs Community Service" },
    { title: "Dress Code Violation", first: "Warning/Apology", second: "10-20 hrs Community Service", third: "30-50 hrs Community Service" }
  ];

  return (
    <StudentLayout activePage="rules">
      <div className="max-w-6xl mx-auto">
        {/* BEGIN: PageHeading */}
        <section className="mb-10 max-w-4xl" data-purpose="content-header">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Disciplinary Guidelines</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            A comprehensive guide to student discipline and behavioral expectations. These rules ensure a safe and productive learning environment for all members of the academic community at TUP.
          </p>
        </section>
        {/* END: PageHeading */}

        {/* BEGIN: GuidelinesTable */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-8" data-purpose="disciplinary-table-container">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FFF8F8]">
                  <th className="px-6 py-5 text-[11px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-50">Category</th>
                  <th className="px-6 py-5 text-[11px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-50">Offense</th>
                  <th className="px-6 py-5 text-[11px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-50">1st Sanction</th>
                  <th className="px-6 py-5 text-[11px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-50">2nd Sanction</th>
                  <th className="px-6 py-5 text-[11px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-50">3rd Sanction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                
                {/* Map through Major Offenses */}
                {majorOffenses.map((offense, index) => (
                  <tr key={`major-${index}`} className="group hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-6">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-red-50 text-red-800 border border-red-100 whitespace-nowrap">Major Offense</span>
                    </td>
                    <td className="px-6 py-6 font-bold text-gray-900 text-base">{offense.title}</td>
                    <td className="px-6 py-6 text-sm text-gray-600 leading-relaxed">{offense.first}</td>
                    <td className="px-6 py-6 text-sm text-gray-600 leading-relaxed">{offense.second}</td>
                    <td className="px-6 py-6 text-sm text-gray-600 leading-relaxed">{offense.third}</td>
                  </tr>
                ))}

                {/* Map through Minor Offenses */}
                {minorOffenses.map((offense, index) => (
                  <tr key={`minor-${index}`} className="group hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-6">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-100 whitespace-nowrap">Minor Offense</span>
                    </td>
                    <td className="px-6 py-6 font-bold text-gray-900 text-base">{offense.title}</td>
                    <td className="px-6 py-6 text-sm text-gray-600 leading-relaxed">{offense.first}</td>
                    <td className="px-6 py-6 text-sm text-gray-600 leading-relaxed">{offense.second}</td>
                    <td className="px-6 py-6 text-sm text-gray-600 leading-relaxed">{offense.third}</td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
        {/* END: GuidelinesTable */}

        {/* BEGIN: InfoCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" data-purpose="bottom-info-cards">
          
          {/* Appeal Process Card */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-3 bg-red-50 rounded-xl">
                <svg className="w-6 h-6 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Appeal Process</h3>
                <p className="mt-4 text-gray-500 leading-relaxed text-sm">
                  Students have the right to appeal any disciplinary decision within 5 business days of the sanction. Appeals must be submitted in writing to the Office of Student Affairs.
                </p>
              </div>
            </div>
          </div>
          
          {/* Counseling Services Card */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-3 bg-red-50 rounded-xl">
                <svg className="w-6 h-6 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Counseling Services</h3>
                <p className="mt-4 text-gray-500 leading-relaxed text-sm">
                  Corrective actions often involve mandatory counseling. Our aim is restoration and personal growth rather than just punitive measures.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        {/* END: InfoCards */}
      </div>
    </StudentLayout>
  );
};

export default RulesOnConduct;