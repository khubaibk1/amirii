import React from 'react'
import image1 from "../../../public/images/talon-one.png";
import nextarrow from "../../../public/images/next-arrow.png";
import backarrow from "../../../public/images/back-arrow.png"
import Image from "next/image";

const Signup = () => {
  return (
    <div>
<div className="w-full max-w-[1800px] mx-auto flex flex-col justify-evenly items-center  min-h-[100vh] ">
      <div>
        <Image src={image1} />
      </div>
      <div className="login-form min-h-[500px] flex flex-col justify-end pb-3 my-10">
       
          <div className="  mt-[17px] ml-[20px]">
            <div className='w-[50px]'>
            <Image src={backarrow} className='w-[50px]'/>
            </div>
          </div>

          <h1 className="font-main-color text-center text-[#545685] mb-auto mb-5">Register</h1>

          <div class="px-20 w-[400px] input-item mb-auto">
            <div className="text-purple-900 pb-1">Username</div>
            <div className="font-size-14 w-full">
              <div className="">
                <input
                  maxlength="15"
                  step=""
                  enterkeyhint="done"
                  autocomplete="off"
                  type=""
                  className="uni-input-input py-3 px-2 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* <div data-v-b83d5b80="" class="  font-size-14 m-t-30   input-item" > */}
          {/* <div data-v-b83d5b80="" class="text">
          Phone No.</div> */}

          {/* <div data-v-b83d5b80="" class="u-flex u-flex-item-center u-flex-center bg-white"><uni-picker data-v-b83d5b80="">
          <div class="uni-picker-container uni-selector-select"><div class="uni-mask uni-picker-mask" >
          </div><div class="uni-picker-custom"><div class="uni-picker-header">
          <div class="uni-picker-action uni-picker-action-cancel"> 
          Cancel 
          </div>
          
        

          <div class="uni-picker-action uni-picker-action-confirm">
           Done </div>
           </div>
           <div class="uni-picker-select"><div class="uni-picker-item selected">
           Afghanistan </div>
           <div class="uni-picker-item"> 
           Albania </div>
           <div class="uni-picker-item"> 
           Algeria </div><div class="uni-picker-item"> 
           American Samoa </div><div class="uni-picker-item"> 
           Andorra </div><div class="uni-picker-item"> Angola </div><div class="uni-picker-item"> Anguilla 
           </div><div class="uni-picker-item"> Antigua and Barbuda </div><div class="uni-picker-item"> Argentina </div>
           <div class="uni-picker-item"> Armenia </div><div class="uni-picker-item"> Aruba </div><div class="uni-picker-item">
            Australia </div><div class="uni-picker-item"> Austria </div><div class="uni-picker-item"> Azerbaijan </div><div class="uni-picker-item"> Bahamas </div><div class="uni-picker-item"> 
            Bahrain </div><div class="uni-picker-item"> Bangladesh </div><div class="uni-picker-item"> Barbados </div><div class="uni-picker-item"> Belarus </div>
            <div class="uni-picker-item"> Belgium </div><div class="uni-picker-item"> Belize </div><div class="uni-picker-item"> 
            Benin </div><div class="uni-picker-item"> Bermuda </div><div class="uni-picker-item"> Bhutan </div><div class="uni-picker-item"> 
            Bolivia </div><div class="uni-picker-item"> Bosnia and Herzegovina </div>
            <div class="uni-picker-item"> Botswana </div><div class="uni-picker-item"> Brazil </div><div class="uni-picker-item"> Brunei 
            </div><div class="uni-picker-item"> Bulgaria </div><div class="uni-picker-item"> 
            Burkina Faso </div><div class="uni-picker-item"> Burundi </div><div class="uni-picker-item"> 
            Cambodia </div><div class="uni-picker-item"> Cameroon </div><div class="uni-picker-item"> Canada
             </div><div class="uni-picker-item"> Cape Verde </div><div class="uni-picker-item"> Cayman Islands 
             </div><div class="uni-picker-item"> Central African Republic </div><div class="uni-picker-item"> Chad </div>
             <div class="uni-picker-item"> Chile </div><div class="uni-picker-item"> Chinese Mainland </div>
             <div class="uni-picker-item"> Colombia </div><div class="uni-picker-item"> Comoros </div><div class="uni-picker-item">
              Cook Islands </div><div class="uni-picker-item"> Costa Rica </div><div class="uni-picker-item"> 
              Croatia </div><div class="uni-picker-item"> Curacao </div><div class="uni-picker-item"> Cyprus </div>
              <div class="uni-picker-item"> Czechia </div><div class="uni-picker-item"> Democratic Republic of the Congo </div>
              <div class="uni-picker-item"> Denmark </div><div class="uni-picker-item"> Djibouti </div><div class="uni-picker-item"> Dominica </div><div class="uni-picker-item"> Dominican Republic </div>
              <div class="uni-picker-item"> Ecuador </div><div class="uni-picker-item"> Egypt </div><div class="uni-picker-item"> El Salvador </div>
              <div class="uni-picker-item"> Equatorial Guinea </div><div class="uni-picker-item"> Eritrea </div><div class="uni-picker-item"> Estonia </div><div class="uni-picker-item"> Eswatini </div>
              <div class="uni-picker-item"> Ethiopia </div><div class="uni-picker-item"> Faroe Islands </div><div class="uni-picker-item"> Fiji </div><div class="uni-picker-item"> Finland </div><div class="uni-picker-item"> France </div>
              <div class="uni-picker-item"> French Guiana </div><div class="uni-picker-item"> French Polynesia </div>
              <div class="uni-picker-item"> Gabon </div><div class="uni-picker-item"> Gambia </div><div class="uni-picker-item"> Georgia </div><div class="uni-picker-item"> Germany </div>
              <div class="uni-picker-item"> Ghana </div><div class="uni-picker-item"> Gibraltar </div><div class="uni-picker-item"> Greece </div><div class="uni-picker-item"> Greenland </div><div class="uni-picker-item"> Grenada </div><div class="uni-picker-item"> Guadeloupe </div><div class="uni-picker-item"> Guam </div><div class="uni-picker-item"> Guatemala </div><div class="uni-picker-item"> Guinea </div><div class="uni-picker-item"> Guinea-Bissau </div><div class="uni-picker-item"> Guyana </div><div class="uni-picker-item"> Haiti </div><div class="uni-picker-item">
               Honduras </div><div class="uni-picker-item"> Hong Kong </div><div class="uni-picker-item"> Hungary </div><div class="uni-picker-item"> Iceland </div><div class="uni-picker-item"> India </div><div class="uni-picker-item"> Indonesia </div><div class="uni-picker-item"> Iraq </div><div class="uni-picker-item"> Ireland </div><div class="uni-picker-item"> Israel </div><div class="uni-picker-item"> Italy </div><div class="uni-picker-item">
                Jamaica </div><div class="uni-picker-item"> Japan </div><div class="uni-picker-item"> Jordan </div><div class="uni-picker-item"> Kazakhstan </div><div class="uni-picker-item"> Kenya </div><div class="uni-picker-item"> Kiribati </div><div class="uni-picker-item"> Kuwait </div><div class="uni-picker-item"> Kyrgyzstan </div><div class="uni-picker-item"> Laos </div><div class="uni-picker-item"> Latvia </div><div class="uni-picker-item"> Lebanon </div><div class="uni-picker-item"> Lesotho </div><div class="uni-picker-item"> Liberia </div><div class="uni-picker-item"> Libya </div><div class="uni-picker-item">
                 Liechtenstein </div><div class="uni-picker-item"> Lithuania </div><div class="uni-picker-item"> Luxembourg </div><div class="uni-picker-item"> Macao </div><div class="uni-picker-item"> North Macedonia </div><div class="uni-picker-item"> Madagascar </div><div class="uni-picker-item"> Malawi </div><div class="uni-picker-item"> Malaysia </div><div class="uni-picker-item"> Maldives </div><div class="uni-picker-item"> Mali </div><div class="uni-picker-item"> Malta </div><div class="uni-picker-item"> Martinique </div><div class="uni-picker-item"> Mauritania </div><div class="uni-picker-item"> Mauritius </div><div class="uni-picker-item"> Mayotte </div><div class="uni-picker-item"> Mexico </div><div class="uni-picker-item"> Moldova </div><div class="uni-picker-item"> Monaco </div><div class="uni-picker-item"> Mongolia </div><div class="uni-picker-item"> Montenegro </div><div class="uni-picker-item">
                  Montserrat </div><div class="uni-picker-item"> Morocco </div><div class="uni-picker-item"> Mozambique </div><div class="uni-picker-item"> Myanmar </div><div class="uni-picker-item"> Namibia </div><div class="uni-picker-item"> Nepal </div><div class="uni-picker-item"> Netherlands </div><div class="uni-picker-item"> New Caledonia </div><div class="uni-picker-item"> New Zealand </div><div class="uni-picker-item"> Nicaragua </div><div class="uni-picker-item"> Niger </div><div class="uni-picker-item"> Nigeria </div><div class="uni-picker-item"> 
                  Norway </div><div class="uni-picker-item"> Oman </div><div class="uni-picker-item"> Pakistan </div><div class="uni-picker-item"> Palau </div><div class="uni-picker-item"> Palestine </div><div class="uni-picker-item"> Panama </div><div class="uni-picker-item"> Papua New Guinea </div><div class="uni-picker-item"> Paraguay </div><div class="uni-picker-item"> Peru </div><div class="uni-picker-item"> Philippines </div><div class="uni-picker-item"> Poland </div><div class="uni-picker-item"> Portugal </div><div class="uni-picker-item"> 
                  Puerto Rico </div><div class="uni-picker-item"> Qatar </div><div class="uni-picker-item"> Republic Of The Congo </div><div class="uni-picker-item"> Réunion Island </div><div class="uni-picker-item"> Romania </div><div class="uni-picker-item"> Rwanda </div><div class="uni-picker-item"> Saint Kitts and Nevis </div><div class="uni-picker-item"> Saint Lucia </div><div class="uni-picker-item"> Saint Pierre and Miquelon </div><div class="uni-picker-item"> Saint Vincent and The Grenadines </div><div class="uni-picker-item"> Samoa </div><div class="uni-picker-item"> San Marino </div><div class="uni-picker-item"> Sao Tome and Principe </div><div class="uni-picker-item"> Saudi Arabia </div><div class="uni-picker-item"> 
                  Senegal </div><div class="uni-picker-item"> Serbia </div><div class="uni-picker-item"> Seychelles </div><div class="uni-picker-item"> Sierra Leone </div><div class="uni-picker-item"> Singapore </div><div class="uni-picker-item"> Sint Maarten (Dutch Part) </div><div class="uni-picker-item"> Slovakia </div><div class="uni-picker-item"> Slovenia </div><div class="uni-picker-item"> Solomon Islands </div><div class="uni-picker-item"> Somalia </div><div class="uni-picker-item"> South Africa </div><div class="uni-picker-item"> South Korea </div><div class="uni-picker-item"> Spain </div><div class="uni-picker-item"> Sri Lanka </div><div class="uni-picker-item"> Suriname </div><div class="uni-picker-item"> Sweden </div>
                  <div class="uni-picker-item"> Switzerland </div><div class="uni-picker-item"> Taiwan </div><div class="uni-picker-item"> Tajikistan </div><div class="uni-picker-item"> Tanzania </div><div class="uni-picker-item"> Thailand </div><div class="uni-picker-item"> Timor-Leste </div><div class="uni-picker-item"> Togo </div><div class="uni-picker-item"> Tonga </div><div class="uni-picker-item"> Trinidad and Tobago </div><div class="uni-picker-item"> Tunisia </div><div class="uni-picker-item"> Turkey </div><div class="uni-picker-item"> Turkmenistan </div><div class="uni-picker-item"> Turks and Caicos Islands </div><div class="uni-picker-item"> Uganda </div><div class="uni-picker-item"> Ukraine </div><div class="uni-picker-item"> United Arab Emirates </div><div class="uni-picker-item"> United Kingdom </div><div class="uni-picker-item"> United States </div><div class="uni-picker-item"> Uruguay </div><div class="uni-picker-item"> Uzbekistan </div><div class="uni-picker-item"> 
                  Vanuatu </div><div class="uni-picker-item"> Venezuela </div><div class="uni-picker-item"> Vietnam </div><div class="uni-picker-item"> Virgin Islands </div><div class="uni-picker-item"> Virgin Islands </div><div class="uni-picker-item"> Yemen </div><div class="uni-picker-item"> Zambia </div><div class="uni-picker-item"> Zimbabwe </div></div><div></div></div></div><div><uni-view data-v-b83d5b80="" class="u-flex-x u-flex-items-center u-flex-center  height-80"><uni-text data-v-b83d5b80="" class=" m-0-10" ><span>+1</span></uni-text><uni-view data-v-59765974="" data-v-b83d5b80="" class="u-icon u-icon--right"><uni-text data-v-59765974="" hover-class="" class="u-icon__icon uicon-arrow-down" ><span></span></uni-text></uni-view></uni-view></div></uni-picker><uni-input data-v-b83d5b80="" class="  font-size-14 width-full m-l-10"><div class="uni-input-wrapper"><div class="uni-input-placeholder input-placeholder" data-v-b83d5b80="" ></div>
                  <input
                   maxlength="12" step="" enterkeyhint="done" autocomplete="off" type="tel" class="uni-input-input"/>
                    </div></uni-input></div></div> */}


<div class="px-20 w-[400px] input-item mb-auto">
            <div className="text-purple-900 pb-1">Phone No</div>
            <div className="font-size-14 w-full">
              <div className="">
                <input
                  maxlength="15"
                  step=""
                  enterkeyhint="done"
                  autocomplete="off"
                  type=""
                  className="uni-input-input py-3 px-2 rounded-lg"
                />
              </div>
            </div>
          </div>


          <div class="px-20 w-[400px] input-item mb-auto">
            <div className="text-purple-900 pb-1">Login Password</div>
            <div className="font-size-14 w-full">
              <div className="">
                <input
                  maxlength="15"
                  step=""
                  enterkeyhint="done"
                  autocomplete="off"
                  type=""
                  className="uni-input-input py-3 px-2 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div class="px-20 w-[400px] input-item mb-auto">
            <div className="text-purple-900 pb-1">Gender</div>
            <div className="font-size-14 w-full">
              <div className="">
                <input
                  maxlength="15"
                  step=""
                  enterkeyhint="done"
                  autocomplete="off"
                  type=""
                  className="uni-input-input py-3 px-2 rounded-lg"
                />
              </div>
            </div>
          </div>       

          <div class="px-20 w-[400px] input-item mb-auto">
            <div className="text-purple-900 pb-1">Referral Code</div>
            <div className="font-size-14 w-full">
              <div className="">
                <input
                  maxlength="15"
                  step=""
                  enterkeyhint="done"
                  autocomplete="off"
                  type=""
                  className="uni-input-input py-3 px-2 rounded-lg"
                />
              </div>
            </div>
          </div>


          <div className="px-20 input-item w-[400px] mb-20 ">
            <div className="text-purple-900 pb-1">Payment Password</div>

            <div className="w-full">
              <div class="">
                <div className=" text-white"></div>
                <input
                  maxlength="15"
                  step=""
                  enterkeyhint="done"
                  autocomplete="off"
                  type="password"
                  className="uni-input-input py-3 px-2 rounded-lg"
                />
              </div>
            </div>
          </div>

   
          

        <div className="w-full flex flex-row justify-center">
            <div>
              <Image src={nextarrow} className="w-[80px]" width={"80px"} />
            </div>
          </div>
     
      </div>

      <div class="text-center text-[14px] ">
        © 2023 Talon.One GmbH. All rights reserved.
      </div>
    </div>
    </div>
  )
}

export default Signup
