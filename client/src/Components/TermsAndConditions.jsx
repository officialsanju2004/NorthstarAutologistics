import React, { useState } from 'react';
import { Shield, Lock, Eye, Trash2, Database, Cookie, Phone, Mail, ChevronRight, AlertCircle, CheckCircle, ExternalLink, Users, FileText } from 'lucide-react';

import Navbar from '../Navbar';
import Footer from './Footer';
import { FaFileContract } from 'react-icons/fa';


export default function TermsAndConditions() {


    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#F2E9D8] ">

                {/* Header */}
                <div className="bg-[#1F3A5F] text-white py-16 ">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#B23A2F] rounded-2xl mb-6 mt-20">
                                <FaFileContract className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
                            <p className="text-xl text-[#F2E9D8] mb-8">
                                Effective Date: [Insert Effective Date Here]
                            </p>

                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-6 py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Navigation */}


                        {/* Content Area */}
                        <div className="">


                            {/* Main Policy Content */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                                {/* Consent Section */}
                                <div className="mb-10">
                                    <div className="flex items-center mb-6">


                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        Welcome to Northstar Autologistics LLC. By accessing or using our website and services, including SMS communications, you agree to the following Terms and Conditions.
                                    </p>
                                </div>






                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">1. SMS Communications</h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        By providing your phone number and opting in to receive text messages, you consent to receive SMS communications from Northstar Autologistics LLC regarding:
                                    </p>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-[#B23A2F] flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Load updates</span>

                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-[#B23A2F] flex-shrink-0 mt-1" />
                                        <span className="text-gray-700"> Dispatch notifications</span>

                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-[#B23A2F] flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Customer service communications</span>

                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-[#B23A2F] flex-shrink-0 mt-1" />

                                        <span className="text-gray-700">Appointment confirmations</span>

                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-[#B23A2F] flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Account-related updates</span>

                                    </div>
                                </div>

                                <div className="mb-10">

                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        Messaging frequency may vary.
                                    </p>
                                    <p className='text-gray-700 mb-4 leading-relaxed'>Message and data rates may apply.</p>
                                    <p className='text-gray-700 mb-4 leading-relaxed'>For assistance, text HELP or visit our website at <a href="https://northstarautologistics.com" className='text-red-500'><i className='font-bold'> https://northstarautologistics.com</i></a></p>
                                </div>
                                {/* Log Files */}
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">2. Use of Services</h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        You agree to use our services only for lawful purposes and in compliance with all applicable federal and state regulations.
                                    </p>




                                </div>
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">3. Intellectual Property</h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        All content, branding, and materials on this website are the property of Northstar Autologistics LLC and may not be reproduced without written permission.              </p>




                                </div>
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">4. Limitation of Liability</h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        Northstar Autologistics LLC shall not be held liable for delays, service interruptions, or technical issues beyond our control.           </p>




                                </div>
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">5. Privacy</h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy page for more details.          </p>




                                </div>















                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">PRIVACY POLICY  </h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">

                                        Effective Date: [Insert Effective Date Here]             </p>
                                    <p className="text-gray-700 mb-4 leading-relaxed">Northstar Autologistics LLC respects your privacy and is committed to protecting your personal information.</p>
                                    <div className="mb-10">
                                        <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">SMS Communications Privacy</h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            When you opt in to receive SMS communications:
                                        </p>
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-[#B23A2F] flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">We collect your phone number and consent information.</span>

                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-[#B23A2F] flex-shrink-0 mt-1" />
                                            <span className="text-gray-700"> We use this information solely for business communication purposes.</span>

                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-[#B23A2F] flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">We do not sell, rent, or share your mobile information with third parties for marketing purposes.</span>

                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-[#B23A2F] flex-shrink-0 mt-1" />

                                            <span className="text-gray-700">Appointment confirmations</span>

                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-[#B23A2F] flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">Account-related updates</span>

                                        </div>
                                    </div>

                                    <div className="mb-10">

                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            You may opt out at any time by texting STOP.
                                        </p>

                                        <p className='text-gray-700 mb-4 leading-relaxed'>For assistance, text HELP or visit our website at<a href="https://northstarautologistics.com" className='text-red-500'><i className='font-bold'> https://northstarautologistics.com</i></a></p>
                                    </div>

                                </div>

                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">Data Protection</h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        We implement reasonable security measures to protect your information from unauthorized access or disclosure.   </p>




                                </div>
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">Terms Reference</h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        For complete details regarding SMS usage and service terms, please review our Terms and Conditions page.  </p>




                                </div>

                                <div className="mb-10">
                                    <a href="/privacy-policy"><i className="underline">View Our Privacy Policy......</i></a>


                                </div>









                            </div>


                        </div>
                    </div>
                </div>



            </div>
            <Footer />
        </>
    );
}
