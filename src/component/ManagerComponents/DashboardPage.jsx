import { styled } from "styled-components";

export default function DashboardPage() {
  return (
    <StyledDashboardPage>
      {/* 상품 등록 및 삭제 */}
      <div className="ProductRegistWrap">
        <div className="orderCount">
          <div className="dashboardTitle">주문 수</div>
          <div>orderCount/임시/</div>
        </div>
        <div className="sales">
          <div className="dashboardTitle">매출</div>
          <div>sales/임시/</div>
        </div>
        <div className="visitorCount">
          <div className="dashboardTitle">방문자 수</div>
          <div>visitorCount/임시/</div>
        </div>
      </div>
    </StyledDashboardPage>
  );
}

const StyledDashboardPage = styled.div`
  padding: 10px;
  .ProductRegistWrap {
    position: relative;
    display: flex;
    margin-left: 10px;
    gap: 20px;
    margin-top: 60px;
  }
  .ProductRegistWrap > div {
    border: 1px solid #333;
    padding: 3px;
  }
`;
