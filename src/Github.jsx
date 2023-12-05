export default function GithubPage() {
    
  return (
    <div class="card">
      <div class="row">
        <div class="images">
          <img src={`${data.avatar_url}`} alt="profile image" id="img" />
        </div>
        <div class="name">
          <h1>${data.name}</h1>
          <p>${data.bio}</p>
          <div class="following">
            <p>${data.followers}: Followers</p>
            <p>${data.following}: Following</p>
            <p>${data.public_repos}: Repos</p>
          </div>
          <div id="repos"></div>
        </div>
      </div>
    </div>
  );
}
