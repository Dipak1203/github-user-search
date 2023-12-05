import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState();
  // const [dataRepo, setDataRepo] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://api.github.com/users/${user}`);
    const resData = await res.json();
    setData(resData);

    // const resRepo = await fetch(`https://api.github.com/users/${user}/repos`);
    // const repoDatas = await resRepo.json();
    // setDataRepo(repoDatas);
  };

  // console.log(dataRepo)

  return (
    <div className="container">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search By User Name"
          id="search"
          name="user"
          onChange={(e) => setUser(e.target.value)}
        />
      </form>
      <div className="main" id="main">
        {data && (
          <div className="card">
            <div className="row">
              <div className="images">
                <img src={`${data?.avatar_url}`} alt="profile image" id="img" />
              </div>
              <div className="name">
                <h1>{data?.name}</h1>
                <p>{data?.bio}</p>
                <div className="following">
                  <p>{data?.followers}: Followers</p>
                  <p>{data?.following}: Following</p>
                  <p>{data?.public_repos}: Repos</p>
                </div>
                <div id="repos"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <p id="copyright">createdByDIPAKKUMAL</p>
    </div>
  );
}
