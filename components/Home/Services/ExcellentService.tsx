import SectionTitle from "@/components/utils/SectionTitle";
import React from "react";
import imgExcellentServiceTitle from "@/assets/moreServices/excellent_service_title.png";
import ProgressBar from "./ProgressBar";

const ExcellentService: React.FC = () => {
  return (
    <div className="container py-5">
      <SectionTitle
        titleImg={imgExcellentServiceTitle}
        tagline="皇创全心全意为您提供最优质的服务"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 pt-12">
        <ProgressBar
          progress="60"
          unit="秒"
          title="平均充值时间"
          tagline="AVERAGE TIME OF DEPOSIT"
        />
        <ProgressBar
          progress="80"
          unit="秒"
          title="合作支付平台"
          tagline="PAYMENT PLATFORM PARTNERS"
        />
        <ProgressBar
          progress="90"
          unit="秒"
          title="平均提现时间"
          tagline="AVERAGE TIME OF WITHDRAW"
        />
        <ProgressBar
          progress="32"
          unit="秒"
          title="合作游戏平台"
          tagline="GAMING PROVIDER PARTNERS"
        />
      </div>
    </div>
  );
};

export default ExcellentService;
