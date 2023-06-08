import { styled } from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TodatVisitCnt() {
  const [visitCnt, setVisitCnt] = useState(0);

  const increaseVisitCnt = () => {
    axios
      .post("api/visit")
      .then((response) => {
        const newCnt = response.data.visitCnt;
        setVisitCnt(newCnt);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  const resetVisitCnt = () => {
    axios
      .post("/api/resetVisitCnt")
      .then((response) => {
        const newCnt = response.data.visitCnt;
        setVisitCnt(newCnt);
      })
      .catch((error) => {
        console.error("Error resetting visit count:", error);
      });
  };

  useEffect(() => {
    increaseVisitCnt();

    const resetInterval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        resetVisitCnt();
      }
    }, 60000); // 매 분마다 체크

    return () => {
      clearInterval(resetInterval);
    };
  }, []);
  return (
    <VisitorCount>
      <Title>오늘 방문자 수</Title>
      <div>{visitCnt}</div>
    </VisitorCount>
  );
}

const VisitorCount = styled.div`
  border: 1px solid #aaa;
  padding: 3px;
  border-radius: 10px;
`;
const Title = styled.div`
  text-align: center;
`;
