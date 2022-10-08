import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
  useMatches,
} from 'react-router-dom';
import queryString from 'query-string';

const activeStyle = {
  fontWeight: 'bold',
  backgroundColor: 'yellow',
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello App10.</h1>

        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about/company/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              about company
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/user/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              profile/user
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weblog/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weblog2/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              blog2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hello/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              hello
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Outlet />} />
          {/* /about/company/로 접속하면 
          react-route-dom 과거 버전처럼 about과 aboutcompany가 동시에 매칭되어 둘다 표시되지않음. 
          exact 속성 불필요. */}
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/about/company" element={<AboutCompanyPage />} />

          {/* AboutPage 안에 Outlet을 만들어서 자식 Route인 AboutCompanyPage를 나타내 준다. 
          AboutPage는 전체적인 레이아웃을 그릴수 있고 AboutCompanyPage에서는 내용만을 그릴수 있음.*/}
          {/* <Route path="/about/*" element={<AboutPage />}>
            <Route path="company/" element={<AboutCompanyPage />} />
          </Route> */}

          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/weblog/*" element={<BlogList />} />
          <Route path="/weblog2/*" element={<BlogList />} />
          <Route path="/weblog2/:post_id/" element={<BlogDetail />} />
          <Route path="*" element={<RouteNoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// /about/
const AboutPage = () => (
  <div>
    <h2>AboutPage</h2>
    <Outlet />
  </div>
);

// /about/company
const AboutCompanyPage = () => (
  <div>
    <h2>AboutCompanyPage</h2>
  </div>
);

// /profile/
const ProfilePage = () => {
  const location = useLocation();
  const qs = queryString.parse(location.search);

  console.log(qs);

  return (
    <div>
      <h2>ProfilePage</h2>
      {JSON.stringify(qs)}
      <Routes>
        <Route path="user/" element={<div>안녕하세요.</div>}></Route>
      </Routes>
    </div>
  );
};

// /blog/
const BlogList = () => {
  const [list, setList] = useState([
    { postId: 100, key: 1 },
    { postId: 101, key: 2 },
  ]);
  const { pathname: url } = useLocation();
  return (
    <div>
      <h2>BlogList</h2>
      <ul>
        {list.map((v, i) => {
          return (
            <li key={i}>
              <Link to={`/weblog/${v.postId}/`}>{v.postId}번 포스팅</Link>
            </li>
          );
        })}
      </ul>
      <Routes>
        {list.map((v, i) => {
          return (
            <Route
              key={i}
              path={`${v.postId}/`}
              element={<BlogDetail post_id={v.postId} />}
            />
          );
        })}
      </Routes>
      <ul>
        <li>
          <Link to="/weblog2/100/">블로그2 100</Link>
        </li>
        <li>
          <Link to="/weblog2/101/">블로그2 101</Link>
        </li>
      </ul>
    </div>
  );
};

const BlogDetail = (props) => {
  debugger;
  const [post, setPost] = useState();
  const param = useParams();

  let { post_id } = props;
  if (post_id === undefined) {
    post_id = param.post_id;
  }

  useEffect(() => {
    console.log(`get post id : ${post_id}`);
    setPost({ title: `Post#${post_id}`, content: `Post content ${post_id}` });
  }, [post_id]);

  return (
    <div>
      <h2>Blog Detail #{post_id}</h2>
      {JSON.stringify(post)}
    </div>
  );
};

const RouteNoMatch = () => {
  const location = useLocation();

  console.log(location);

  return <div>{location.pathname}에 매칭된 Route가 없습니다.</div>;
};

export default App;
