import React, { useState } from 'react';
import { Shield, Lock, Eye, Trash2, Database, Cookie, Phone, Mail, ChevronRight, AlertCircle, CheckCircle, ExternalLink, Users, FileText } from 'lucide-react';
import Footer from './Components/Footer';
import Navbar from './Navbar';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: <Shield className="w-5 h-5" /> },
    { id: 'information', title: 'Information We Collect', icon: <Database className="w-5 h-5" /> },
    { id: 'usage', title: 'How We Use Information', icon: <Eye className="w-5 h-5" /> },
    { id: 'sharing', title: 'Information Sharing', icon: <Users className="w-5 h-5" /> },
    { id: 'rights', title: 'Your Rights', icon: <FileText className="w-5 h-5" /> },
    { id: 'children', title: "Children's Privacy", icon: <Lock className="w-5 h-5" /> },
  ];

  const privacyPoints = [
    { icon: <Shield className="w-6 h-6" />, text: "No mobile information shared with third parties for marketing", color: "text-[#B23A2F]" },
    { icon: <Lock className="w-6 h-6" />, text: "We don't ask for personal information unless truly needed", color: "text-[#1F3A5F]" },
    { icon: <Database className="w-6 h-6" />, text: "We don't store personal information unnecessarily", color: "text-[#B23A2F]" },
  ];

  const rights = [
    { icon: <Eye className="w-6 h-6" />, title: "Right to Access", desc: "You have the right to request copies of your personal data. We may charge you a small fee for this service." },
    { icon: <FileText className="w-6 h-6" />, title: "Right to Rectification", desc: "You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete." },
    { icon: <Trash2 className="w-6 h-6" />, title: "Right to Erasure", desc: "You have the right to request that we erase your personal data, under certain conditions." },
    { icon: <Lock className="w-6 h-6" />, title: "Right to Restrict", desc: "You have the right to request that we restrict the processing of your personal data, under certain conditions." },
    { icon: <Shield className="w-6 h-6" />, title: "Right to Object", desc: "You have the right to object to our processing of your personal data, under certain conditions." },
    { icon: <Database className="w-6 h-6" />, title: "Data Portability", desc: "You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions." },
  ];

  
  return (
    <>
      <Navbar/> 
    <div className="min-h-screen bg-[#F2E9D8] ">
     
      {/* Header */}
      <div className="bg-[#1F3A5F] text-white py-16 ">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#B23A2F] rounded-2xl mb-6 mt-20">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-[#F2E9D8] mb-8">
              Protecting your privacy is our top priority at Northstar Autologstics LLC,California
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
            {/* Key Privacy Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {privacyPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-[#F2E9D8] hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 bg-[#F2E9D8] rounded-xl flex items-center justify-center mb-4 ${point.color}`}>
                    {point.icon}
                  </div>
                  <p className="text-gray-700 font-medium">{point.text}</p>
                </div>
              ))}
            </div>

            {/* Main Policy Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              {/* Consent Section */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10   flex items-center justify-center mr-4">
                   <CheckCircle className="w-5 h-5 text-[#B23A2F] flex-shrink-0 mt-1" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1F3A5F]">Consent</h2>
                    <p className="text-gray-600">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
      No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.

At Northstar Autologstics LLC,California accessible from <a href="https://northstarautologistics.com" className='text-red-500'>https://northstarautologistics.com</a> one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Northstar Autologstics LLC,California and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Northstar Autologstics LLC,California. This policy is not applicable to any information collected offline or via channels other than this website.
We emphasize not sharing/disclosing/selling/trading our customers’ data to any third party.

We don’t ask you for personal information unless we truly need it.

We don’t share your personal information with anyone except to comply with the law or protect our rights.

We don’t store personal information on our servers unless required for the ongoing operation of one of our services.
                </p>
              </div>

       

              {/* Information Collection */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">Information We Collect</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The personal information that you are asked to provide, and the reasons why you
                  are asked to provide it, will be made clear to you at the point we ask you to
                  provide your personal information.
                </p>
                <div className="bg-[#F2E9D8]/50 p-6 rounded-xl">
                  <h4 className="font-bold text-[#1F3A5F] mb-3">When you contact us directly, we may receive:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Name', 'Email address', 'Phone number', 'Message contents', 'Attachments', 'Company name'].map((item) => (
                      <li key={item} className="flex items-center">
                        <div className="w-2 h-2 bg-[#B23A2F] rounded-full mr-3"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">How We Use Your Information We use the information we collect in various ways, including to:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Provide, operate, and maintain our website",
                    "Improve, personalize, and expand our website",
                    "Understand and analyze how you use our website",
                    "Develop new products, services, features, and functionality",
                    "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes",
                    "Send you updates and marketing communications",
                    "Find and prevent fraud"
                  ].map((use, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#B23A2F] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{use}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Log Files */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">Log Files</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Northstar Autologstics LLC,California follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.
                </p>
       
              </div>
               <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">Advertising Partners Privacy Policies </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                 You may consult this list to find the Privacy Policy for each of the advertising partners of Northstar Autologstics LLC,California. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Northstar Autologistics, LLC California which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that Northstar AutoLogistics has no access to or control over these cookies that are used by third-party advertisers.
                </p>
       
              </div>
               <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">Third Party Privacy Policies </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                 Northstar Autologistics Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.

You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.
                </p>
       
              </div>
                             <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">CCPA Privacy Rights (Do Not Sell My Personal Information) Under the CCPA, among other rights, California consumers have the right to:</h3>
                <ul className="text-gray-700 mb-4 leading-relaxed">
                   
                        <li> Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                
                 <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                
                 <li> Request that a business that sells a consumer’s personal data, not to sell the consumer’s personal data.</li>
               
               
                </ul>
                 <p className="text-gray-700 mb-4 leading-relaxed">
                
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                </p>
            
       
              </div>


              {/* Your Rights */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">GDPR Data Protection Rights We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rights.map((right, index) => (
                    <div
                      key={index}
                      className="bg-[#F2E9D8]/30 p-6 rounded-xl border border-[#1F3A5F]/10 hover:border-[#B23A2F]/30 transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#1F3A5F] rounded-xl flex items-center justify-center mb-4">
                        <div className="text-white">{right.icon}</div>
                      </div>
                      <h4 className="font-bold text-[#1F3A5F] mb-2">{right.title}</h4>
                      <p className="text-gray-700 text-sm">{right.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[#F2E9D8] rounded-xl">
                  <p className="text-gray-700">
                    <span className="font-bold text-[#B23A2F]">Note:</span> If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                  </p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1F3A5F] mb-6">Children's Information</h3>
                <div className="bg-[#F2E9D8] p-6 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    Another part of our priority is adding protection for children while using the
                    internet. We encourage parents and guardians to observe, participate in, and/or
                    monitor and guide their online activity.
                  </p>
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="text-gray-700 font-medium">
                      Northstar Autologistics does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                    </p>
                  </div>
                </div>
              </div>
                     <div className="mb-10 bg-[#F2E9D8] p-6 rounded-xl border border-[#B23A2F]/20">
                <h4 className="font-bold text-[#1F3A5F] mb-3">Get a Free Estimate</h4>

               
                <p className="text-gray-700 text-sm leading-relaxed">
                 +1 (209)395-8481
                </p>
              </div>
              
                        {/* Disclaimer */}
              <div className="bg-[#F2E9D8] p-6 rounded-xl border border-[#B23A2F]/20">
                <h4 className="font-bold text-[#1F3A5F] mb-3">Northstar Autologstics LLC,California</h4>

                <h4 className="font-bold text-[#1F3A5F] mb-3">Disclaimer</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  All pictures of equipment are meant for general reference and do not imply automatic
                  use of that equipment. We operate as a brokerage working with a vetted group of
                  contracted drivers. If you would like to view pictures of the equipment being used
                  for your specific transport, please be sure to request those from your Northstar Autologistics,LLC California
                  representative. SMS consent is only for our business and not for any
                  other purpose.
                </p>
              </div>

   
            </div>

          
          </div>
        </div>
      </div>



    </div>
       <Footer/>
    </>
  );
}