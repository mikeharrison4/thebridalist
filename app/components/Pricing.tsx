export function Pricing() {
  return (
    <div id="pricing" className="bg-gray-100 px-6 sm:px-28 md:px-48 py-16">
      <h2 className="text-3xl sm:text-4xl uppercase mb-8 tracking-wider text-center">
        Pricing
      </h2>
      <div className="max-w-4xl mx-auto space-y-12 tracking-wider">
        {/* Wedding Day Styling */}
        <div>
          <h3 className="text-2xl sm:text-3xl uppercase mb-6 text-center">
            Wedding Day Styling (Bride)
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-lg">Signature Bridal Hair</span>
              <span className="text-xl font-semibold">£150</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-lg">Polished Bridal Makeup</span>
              <span className="text-xl font-semibold">£150</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-3">
              <span className="text-lg font-semibold">Complete Bridal Look (Hair & Makeup)</span>
              <span className="text-xl font-semibold">£300</span>
            </div>
          </div>
        </div>

        {/* Trial Experience */}
        <div>
          <h3 className="text-2xl sm:text-3xl uppercase mb-6 text-center">
            Trial Experience
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-lg">Hair Trial</span>
              <span className="text-xl font-semibold">£100</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-lg">Makeup Trial</span>
              <span className="text-xl font-semibold">£100</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-3">
              <span className="text-lg font-semibold">Full Look Trial</span>
              <span className="text-xl font-semibold">£200</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center italic">
            Trials are held 4–8 weeks before your wedding on Wednesdays or Fridays in Hove (BN3 8PB).
          </p>
        </div>

        {/* Bridal Party */}
        <div>
          <h3 className="text-2xl sm:text-3xl uppercase mb-6 text-center">
            Bridal Party
          </h3>
          <p className="text-sm text-gray-600 mb-4 text-center italic">
            (Bridesmaids, Mother of the Bride, Mother of the Groom)
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-lg">Hair</span>
              <span className="text-xl font-semibold">£65 per person</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-3">
              <span className="text-lg">Makeup</span>
              <span className="text-xl font-semibold">£65 per person (by assistant)</span>
            </div>
          </div>
        </div>

        {/* Assistants */}
        <div>
          <h3 className="text-2xl sm:text-3xl uppercase mb-6 text-center">
            Assistants
          </h3>
          <p className="text-sm text-gray-600 mb-4 text-center">
            For larger bookings or bridal party makeup, I may bring a trusted assistant.
          </p>
          <div className="flex justify-between items-center border-b border-gray-300 pb-3">
            <span className="text-lg">Assistant Fee</span>
            <span className="text-xl font-semibold">£80 per assistant</span>
          </div>
        </div>

        {/* Travel */}
        <div>
          <h3 className="text-2xl sm:text-3xl uppercase mb-6 text-center">
            Travel
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-lg">Within 30 miles of Brighton (BN41 2DF)</span>
              <span className="text-xl font-semibold text-green-700">Complimentary</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-3">
              <span className="text-lg">Beyond 30 miles</span>
              <span className="text-xl font-semibold">£1 per mile</span>
            </div>
          </div>
        </div>

        {/* Booking Info */}
        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl uppercase mb-4 text-center">Securing Your Date</h3>
          <p className="text-center leading-relaxed">
            A 25% non-refundable deposit is required to confirm your booking.
          </p>
        </div>
      </div>
    </div>
  )
}
