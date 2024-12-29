import {
  Globe,
  Award,
  Quote,
  BookOpen,
  Calendar,
  Users,
  Heart,
  Flame,
  TrendingUp,
  Building,
} from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { Chart } from "react-google-charts";

const ManmohanSinghTribute = () => {
  const globeRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const rotateGlobe = () => {
      setRotation((prev) => (prev + 0.5) % 360);
    };
    const interval = setInterval(rotateGlobe, 50);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-gray-100 to-white">
        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-12 bg-black transform rotate-45 origin-top-right opacity-80"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div
            ref={globeRef}
            className="absolute w-full h-full opacity-10"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <Globe
              size={800}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="z-10 max-w-4xl mx-auto px-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Prime_Minister_Dr._Manmohan_Singh_in_March_2014.jpg"
            alt="Dr. Manmohan Singh"
            className="w-48 h-48 rounded-full mx-auto mb-8 shadow-lg object-cover object-top"
          />
          <h1 className="text-5xl font-bold mb-4">Dr. Manmohan Singh</h1>
          <p className="text-xl text-gray-600">
            Economist, Statesman, and 13th Prime Minister of India
          </p>
          <p className="max-w-2xl mx-auto text-gray-600 mt-6 mb-12">
            A visionary leader who transformed India's economic landscape, Dr.
            Singh's tenure as Prime Minister was marked by unprecedented growth,
            progressive policies, and diplomatic achievements that shaped modern
            India.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="group p-4 bg-white/80 backdrop-blur rounded-lg shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-500 group-hover:text-blue-600" />
              <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-600">
                10+
              </div>
              <div className="text-sm text-gray-600">Years as PM</div>
            </div>
            <div className="group p-4 bg-white/80 backdrop-blur rounded-lg shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-500 group-hover:text-blue-600" />
              <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-600">
                9.4%
              </div>
              <div className="text-sm text-gray-600">Peak GDP Growth</div>
            </div>
            <div className="group p-4 bg-white/80 backdrop-blur rounded-lg shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              <Building className="w-8 h-8 mx-auto mb-2 text-blue-500 group-hover:text-blue-600" />
              <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-600">
                18
              </div>
              <div className="text-sm text-gray-600">Major Reforms</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 w-full text-center">
          <p className="text-lg italic text-gray-600">
            "A statesman who led with dignity and wisdom"
            <br />
            <span className="text-sm">2004-2014</span>
          </p>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <BookOpen className="mr-4" />
            <h2 className="text-3xl font-bold">Biography</h2>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            Dr. Manmohan Singh was born on 26 September 1932 in Gah, Punjab (now
            in Pakistan). He served as the Prime Minister of India for two
            consecutive terms from 2004 to 2014. As a renowned economist, he is
            credited with introducing far-reaching reforms in the 1990s as
            Finance Minister which liberalized India's economy.
          </p>
          <p className="text-lg leading-relaxed">
            He completed his education from Punjab University, Cambridge
            University, and Oxford University. Before entering politics, he held
            several key positions including Chief Economic Advisor, Deputy Chairman
            of the Planning Commission, and Finance Minister of India.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Award className="mr-4" />
            <h2 className="text-3xl font-bold">Major Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Economic Reforms</h3>
              <Chart
                width={"100%"}
                height={"200px"}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Year", "GDP Growth"],
                  ["1991", 1.1],
                  ["1995", 7.6],
                  ["2000", 4.0],
                  ["2005", 9.3],
                  ["2010", 8.5],
                ]}
                options={{
                  title: "GDP Growth Rate",
                  legend: {
                    position: "none",
                  },
                }}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Nuclear Deal</h3>
              <p className="text-gray-700">
                Successfully negotiated the Indo-US Civil Nuclear Agreement,
                marking a new chapter in Indo-US relations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Quote className="mr-4" />
            <h2 className="text-3xl font-bold">Notable Quotes</h2>
          </div>

          <div className="grid gap-6">
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-lg italic">
                "I have never claimed to be a great speaker or a mass leader. I
                am who I am and I cannot become what I am not."
              </p>
            </blockquote>

            <blockquote className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-lg italic">
                "The road ahead is long and arduous. But as the great saying
                goes, a journey of a thousand miles begins with a single step."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Calendar className="mr-4" />
            <h2 className="text-3xl font-bold">Key Events Timeline</h2>
          </div>

          <div className="relative">
            {[
              {
                year: "1932",
                event: "Born in Gah, Punjab (now in Pakistan)",
              },
              {
                year: "1991",
                event: "Became Finance Minister of India",
              },
              {
                year: "2004",
                event: "Sworn in as 13th Prime Minister of India",
              },
              {
                year: "2008",
                event: "Indo-US Nuclear Deal signed",
              },
              {
                year: "2014",
                event: "Completed second term as Prime Minister",
              },
              {
                year: "2024",
                event: "Passed away on 27 December in New Delhi, India",
              },
            ].map((item, index) => (
              <div key={index} className="flex mb-8 items-start">
                <div className="w-24 font-bold">{item.year}</div>
                <div className="w-4 h-4 rounded-full bg-blue-500 mt-1 mx-4"></div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Heart className="mr-4" />
            <h2 className="text-3xl font-bold">In Memoriam</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2024/12/27/2024127134F-scaled.jpg?fit=2560%2C1511&quality=80&zoom=1&ssl=1?v=1735297304"
                alt="Memorial Candlelight Vigil"
                className="w-full h-64 object-cover rounded-lg"
              />

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Final Farewell</h3>
                <p>Passed away on December 27, 2023, in New Delhi, India</p>
                <p>State funeral held with full military honors</p>
                <p>7-day national mourning observed across India</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  World Leaders' Tributes
                </h3>
                <blockquote className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="italic">
                    "A transformative figure who shaped modern India"
                  </p>
                  <footer className="text-sm mt-2">- UN Secretary General</footer>
                </blockquote>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Honors & Recognition</h3>
                <ul className="space-y-2">
                  <li>• National flags flown at half-mast</li>
                  <li>• Special parliamentary session held</li>
                  <li>• Memorial to be established in New Delhi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Flame className="w-12 h-12 mx-auto mb-6 text-blue-500" />
          <h2 className="text-3xl font-bold mb-6">The Legacy Lives On</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Dr. Manmohan Singh's vision for an economically strong and socially
            inclusive India continues to inspire generations. His unwavering
            commitment to public service and economic reform remains a guiding
            light for the nation.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ManmohanSinghTribute;
