import SectionTitle from "@/components/utils/SectionTitle";
import React from "react";
import imgExcellentServiceTitle from "@/assets/moreServices/excellent_service_title.png";

const ExcellentService: React.FC = () => {
  return (
    <div className="container py-5">
      <SectionTitle
        titleImg={imgExcellentServiceTitle}
        tagline="皇创全心全意为您提供最优质的服务"
      />
    </div>
  );
};

export default ExcellentService;
