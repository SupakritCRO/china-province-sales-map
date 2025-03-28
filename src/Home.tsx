import React, { useState } from "react";
import ChinaMap from "./ChinaMap";
import ChinaProvinceMap from "./ChinaProvinceMap";

interface ProvinceData {
  name: string;
  value: number;
  geometry: any;
}

const Home: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState<ProvinceData | null>(null);

  const handleProvinceSelect = (province: ProvinceData) => {
    setSelectedProvince(province);
  };

  const handleBackToChina = () => {
    setSelectedProvince(null);
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {selectedProvince ? (
        <ChinaProvinceMap
          province={selectedProvince}
          onBack={handleBackToChina}
        />
      ) : (
        <ChinaMap onProvinceSelect={handleProvinceSelect} />
      )}
    </div>
  );
};

export default Home;