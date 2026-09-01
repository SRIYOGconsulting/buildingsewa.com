export default function LocationPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <div className="h-[200px] bg-gray-100 flex flex-col items-center justify-center text-center px-6">
        <span className="text-gray-500">
          Home /{" "}
          <span className="text-teal-700 font-semibold">
            Location
          </span>
        </span>

        <h1 className="text-4xl font-bold text-teal-800 mt-2">
          Our Location
        </h1>

        <p className="text-gray-600 mt-2 max-w-2xl">
          Find Building Sewa and get directions to our office.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Location Information */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Visit Building Sewa
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Visit our office to learn more about our building
              construction services and discuss your project
              requirements with our team.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>
                <span className="font-medium text-gray-800">
                  Address:
                </span>{" "}
                P86F+G8R, Pashupati Marg, Kathmandu 44600
              </p>

              <p>
                <span className="font-medium text-gray-800">
                  Phone:
                </span>{" "}
                985-202-4365
              </p>

              <p>
                <span className="font-medium text-gray-800">
                  Email:
                </span>{" "}
                info@sriyog.com
              </p>
            </div>
          </div>
        </section>

        {/* Map */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Find Us on the Map
          </h2>

          <div className="w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.193460784485!2d85.32073757615186!3d27.711312476180435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef740a066ed089%3A0xaf7934e44a7b1e17!2sSRIYOG!5e0!3m2!1sen!2snp!4v1741059444503!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Building Sewa Location"
            />
          </div>
        </section>
      </div>
    </main>
  );
}