import Legal from '../components/Legal.js'
import resumeIcon from '../images/icons/folder.png'
import trophy from '../images/icons/trophy.png'
import githubImg from '../images/icons/github.png'
import blueprint from '../images/icons/blueprint.png'
import suitcase from '../images/icons/suitcase.png'
import skills from '../images/icons/pencil.png'
import handshake from '../images/icons/handshake.png'
import love from '../images/icons/love.png'
import PageTitle from '../components/PageTitle.js';
import insta from '../images/icons/insta.png'
import gmail from '../images/icons/gmail.png'
import linkin from '../images/icons/linkedin.png'
import cisco from '../images/icons/cisco.png'

function Attributions() {
  return (
    <>
      <PageTitle img={false} title={'Attributions'} subtext={'All elements that are not owned by Akhil Kothapalli are cited here!'}/>
      <img id="icon" src={blueprint} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/project" title="project icons">Project icons created by Smashicons - Flaticon</a><br></br>
      <img id="icon" src={githubImg} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a><br></br>
      <img id="icon" src={trophy} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/trophy" title="trophy icons">Trophy icons created by Freepik - Flaticon</a><br></br>
      <img id="icon" src={resumeIcon} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/folder" title="folder icons">Folder icons created by Freepik - Flaticon</a><br></br>
      <img id="icon" src={suitcase} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/work" title="work icons">Work icons created by Freepik - Flaticon</a><br></br>
      <img id="icon" src={skills} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/skills" title="skills icons">Skills icons created by Freepik - Flaticon</a><br></br>
      <img id="icon" src={handshake} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/agreement" title="agreement icons">Agreement icons created by Freepik - Flaticon</a><br></br>
      <img id="icon" src={love} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a><br></br>
      <img id="icon" src={insta} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Pixel perfect - Flaticon</a><br></br>
      <img id="icon" src={gmail} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/gmail" title="gmail icons">Gmail icons created by Freepik - Flaticon</a><br></br>
      <img id="icon" src={linkin} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a><br></br>
      <img id="icon" src={cisco} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/cisco" title="cisco icons">Cisco icons created by Freepik - Flaticon</a><br></br>
      <Legal/>
    </>
    
  );
}

export default Attributions;
