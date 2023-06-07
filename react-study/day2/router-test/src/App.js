import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Rooms from "./Rooms";
import { Room } from "./Rooms";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ padding: 20, border: "5px solid gray" }}>
          <Link to="/">홈</Link>
          <br />
          <Link to="/photo">사진</Link>
          <br />
          <Link to="/rooms">방 소개</Link>
          <br />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/rooms/*" element={<Rooms />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

function Home({ match }) {
  return <h2>이곳은 홈페이지입니다</h2>;
}

function Photo({ match }) {
  return <h2>여기서 사진을 감상하세요</h2>;
}

/*-----브라우저 히스토리 API를 사용한 라우팅 처리-----*/
// class App extends Component {
//   state = {
//     pageName: "",
//   };
//   componentDidMount() {
//     window.onpopstate = (event) => {
//       this.onChangePage(event.state);
//     };
//   }
//   onChangePage = (pageName) => {
//     this.setState({ pageName });
//   };
//   onClick1 = () => {
//     const pageName = "page1";
//     window.history.pushState(pageName, "", "/page1");
//     this.onChangePage(pageName);
//   };
//   onClick2 = () => {
//     const pageName = "page2";
//     window.history.pushState(pageName, "", "/page2");
//     this.onChangePage(pageName);
//   };
//   render() {
//     const { pageName } = this.state;
//     return (
//       <div>
//         <button onClick={this.onClick1}>page1</button>
//         <button onClick={this.onClick2}>page2</button>
//         {!pageName && <Home />}
//         {pageName === "page1" && <Page1 />}
//         {pageName === "page2" && <Page2 />}
//       </div>
//     );
//   }
// }

// function Home() {
//   return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭하세요</h2>;
// }

// function Page1() {
//   return <h2>여기는 페이지1입니다.</h2>;
// }

// function Page2() {
//   return <h2>여기는 페이지2입니다.</h2>;
// }

export default App;
