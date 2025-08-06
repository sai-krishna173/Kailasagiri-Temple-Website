// src/pages/EventsPage.js
import React from 'react';

const mandalaSchedule = {
  daily: [
    { time: "05:00 AM", event: "ఆలయం తెరవడం & నిర్మాల్య దర్శనం" },
    { time: "05:15 AM", event: "గణపతి హోమం" },
    { time: "06:00 AM", event: "పూర్ణాభిషేకం" },
    { time: "07:15 AM", event: "పడి దీపారాధన" },
    { time: "12:15 PM", event: "మహా నైవేద్యం" },
    { time: "12:30 PM", event: "అన్నప్రసాదం (బిక్ష)" },
    { time: "05:00 PM", event: "ఆలయ ప్రారంభం" },
    { time: "06:00 PM", event: "దీపారాదన (త్రిసంద్య)" },
    { time: "07:00 PM", event: "భజన" },
    { time: "08:30 PM", event: "పడి దీపారాధన" },
    { time: "08:45 PM", event: "హరివరాసనం" },
    { time: "09:00 PM", event: "శాస్త ప్రీతి (అల్ఫహారం) & ఆలయం మూసివేత" }
  ],
  special: [
    { date: "24-12-2025", event: "లక్ష పుష్పార్చన" },
    { date: "25-12-2025", event: "మహా పడి పూజ" },
    { date: "26-12-2025", event: "మండలం చివరి రోజు (శాంతి హోమం)" },
    { date: "December", event: "పల్లకీ సేవ" }
  ]
};

const annaprasadamDates = ["08/05/2025 గురువారం", "04/06/2025 బుధవారం", "12/07/2025 బుధవారం", "29/07/2025 మంగళవారం", "25/08/2025 సోమవారం", "22/09/2025 సోమవారం", "19/10/2025 ఆదివారం", "15/11/2025 శనివారం"];

const EventsPage = () => (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                   Temple events / ఆలయ కార్యక్రమాలు
                </h1>
            </div>

            <div className="max-w-5xl mx-auto space-y-16">
                {/* సాధారణ కార్యక్రమాలు */}
                <div className="bg-white rounded-3xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">General programs / సాధారణ కార్యక్రమాలు</h2>
                    <div className="text-center space-y-4">
                        <p className="text-lg text-gray-700"><strong className="text-orange-600">ప్రతి బుధవారం:</strong> అభిషేకం మరియు పడి దీపారాధన.</p>
                        <div>
                            <p className="text-lg text-gray-700"><strong className="text-orange-600">ప్రతి నెల ఉత్తర ఫాల్గుణి నక్షత్రం నాడు:</strong> అన్నప్రసాదం.</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                {annaprasadamDates.map(date => <div key={date} className="bg-orange-50 p-2 rounded-lg">{date}</div>)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* మండలంలో ప్రత్యేక కార్యక్రమాలు */}
                <div className="bg-white rounded-3xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Special programs in Mandal / మండలంలో ప్రత్యేక కార్యక్రమాలు</h2>
                    <p className="text-center text-gray-600 font-semibold mb-8">(16-11-2025 నుండి 30/12/2025 వరకు)</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-center">Daily Programs / రోజువారీ కార్యక్రమాలు</h3>
                            <ul className="space-y-2">
                                {mandalaSchedule.daily.map((item, index) => (
                                    <li key={index} className="flex justify-between py-2 border-b">
                                        <span className="font-medium text-gray-600">{item.time}</span>
                                        <span className="text-gray-800 text-right">{item.event}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                             <h3 className="text-2xl font-semibold mb-4 text-center">Special pujas in this mandala / ప్రత్యేక పూజలు</h3>
                             <ul className="space-y-2">
                                {mandalaSchedule.special.map((item, index) => (
                                    <li key={index} className="flex justify-between py-2 border-b">
                                        <span className="font-medium text-gray-600">{item.date}</span>
                                        <span className="text-gray-800 text-right">{item.event}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default EventsPage;