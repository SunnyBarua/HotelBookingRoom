// import { SearchOutlined } from "@ant-design/icons";
// import AlgoliaPlaces from "algolia-places-react";
// import { DatePicker, Select } from "antd";
// import moment from "moment";
// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";


// const { RangePicker } = DatePicker;
// const { Option } = Select;

// const config = {
//   appId: process.env.REACT_APP_ALGOLIA_APP_ID,
//   apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
//   language: "en",
 
// };

// const Search = () => {

//   const [location, setLocation] = useState("");
//   const [date, setDate] = useState("");
//   const [bed, setBed] = useState("");
 
//   const history = useHistory();

//   const handleSubmit = () => {
//     history.push(`/search-result?location=${location}&date=${date}&bed=${bed}`);
//   };

//   return (
//     <div className="d-flex pb-4">
//       <div className="w-100">
//         <AlgoliaPlaces
//           placeholder="Location"
//           defaultValue={location}
//           options={config}
//           onChange={({ suggestion }) => setLocation(suggestion.value)}
//           style={{ height: "50px" }}
//         />
//       </div>

//       <RangePicker
//         onChange={(value, dateString) => setDate(dateString)}
//         disabledDate={(current) =>
//           current && current.valueOf() < moment().subtract(1, "days")
//         }
//         className="w-100"
//         style={{ height: "50px" }}
//       />

//       <Select
//         onChange={(value) => setBed(value)}
//         className="w-100"
//         size="large"
//         placeholder="Number of beds"
//         style={{ height: "50px !important" }}
//       >
//         <Option key={1}>{1}</Option>
//         <Option key={2}>{2}</Option>
//         <Option key={3}>{3}</Option>
//         <Option key={4}>{4}</Option>
//       </Select>

//       <SearchOutlined
//         onClick={handleSubmit}
//         className="btn btn-primary p-3 btn-square"
//       />
//     </div>
//   );
// };

// export default Search;


import { SearchOutlined } from "@ant-design/icons";
import AlgoliaPlaces from "algolia-places-react";
import { DatePicker, Select } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const { RangePicker } = DatePicker;
const { Option } = Select;

const config = {
  appId: process.env.REACT_APP_ALGOLIA_APP_ID,
  apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
  language: "en",
 
};

const Search = () => {

  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [bed, setBed] = useState("");
 
  const history = useHistory();

  const handleSubmit = () => {
    history.push(`/search-result?location=${location}&date=${date}&bed=${bed}`);
  };

  return (
    <div className="d-flex pb-4">
      <div className="w-100">
        {/* <AlgoliaPlaces
          placeholder="Location"
          defaultValue={location}
          options={config}
          onChange={({ suggestion }) => setLocation(suggestion.value)}
          style={{ height: "50px" }}
        /> */}
         <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="form-control "
                  style={{ height: "50px" }}
                />
      </div>

      <RangePicker
        onChange={(value, dateString) => setDate(dateString)}
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, "days")
        }
        className="w-100"
        style={{ height: "50px" }}
      />

      <Select
        onChange={(value) => setBed(value)}
        className="w-100"
        size="large"
        placeholder="Number of beds"
        style={{ height: "50px !important" }}
      >
        <Option key={1}>{1}</Option>
        <Option key={2}>{2}</Option>
        <Option key={3}>{3}</Option>
        <Option key={4}>{4}</Option>
        <Option key={5}>{5}</Option>
      </Select>

      <SearchOutlined
        onClick={handleSubmit}
        className="btn btn-primary p-3 btn-square"
      />
    </div>
  );
};

export default Search;
