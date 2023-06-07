import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Rooms({ params }) {
  return (
    <div>
      <h2>여기는 방을 소개하는 페이지 입니다.</h2>
      <Link to="/bludRoom">파란 방입니다</Link>
      <Link to="/greenRoom">초록 방입니다</Link>
      <Routes>
        <Route path="rooms/bludRoom" element={"파란 방입니다"} />
        <Route path="rooms/greenRoom" element={"초록 방입니다"} />
        {/* <Route
          exact
          path={params.url}
          render={() => <h3>방을 선택해 주세요.</h3>}
        ></Route> */}
      </Routes>
    </div>
  );
}

export default Rooms;

export function Room({ match }) {
  return <h2>{`${match.params.roomId} 방을 선택하셨습니다.`}</h2>;
}
