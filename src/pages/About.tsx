import React, { useContext, useEffect, useState } from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';
import BrowseDetails from '../Components/BrowseDetails/styles/BrowseDetails.module.css';
import AJ from '../assets/AJ.jpeg';
import bayero from '../assets/bayero.png';
import chidinma from '../assets/chidinma.png';
import dora from '../assets/Dora.png';
import justin from '../assets/justin.png';
import nonso from '../assets/nonso.png';
import gt from '../assets/GT.png'
import bayo from '../assets/bayo.png';
import boye from "../assets/boye.png"
import joshua from "../assets/Joshua.png"
import osaze from "../assets/osaze.png"
import prince from "../assets/prince.png"
import wale from "../assets/wale.png"
import faith from "../assets/faith.jpeg"
import tosin from "../assets/tosin.png"
import freke from '../assets/freke.jpeg';
import ayoola from '../assets/ayoola.jpeg';
import { Link } from 'react-router-dom';
import { AllContext, ArtistAttributes } from '../useContext/interface';
import { DataContext } from '../useContext';
import { TbBrandLinkedin } from 'react-icons/tb';
import { AiOutlineGithub } from 'react-icons/ai';

function About() {
  const Redirect = (path: string) => {
    return (document.location.href = path);
  };
  return (
    <div className={BrowseDetails.aboutContainer}>
      <div className={BrowseDetails.aboutContent}>
        <h4>ABOUT SMOOZEAPP</h4>
        <p className={BrowseDetails.aboutPara}>
          Listen anytime, anywhere All your favorite songs and episodes are
          always available - even without WiFi or LTE.
        </p>
        <p className={BrowseDetails.aboutPara}>
          Find the music you want Search for your favorite songs using the
          description, or turn on the MusicFinder feature to find the song that
          is playing near you.
        </p>
      </div>

      <h4 className={BrowseDetails.h4}>Contributors</h4>
      <div className={BrowseDetails.aboutmusic}>
        <div className={BrowseDetails.artistInfo}>
          <div className={BrowseDetails.artistImg}>
            <img src={AJ} alt="artistImage" />
          </div>
          <h4 className={BrowseDetails.musicInfoHeader}>Ajiri Enoch Osiobe</h4>
          <span className={BrowseDetails.iconAndDesc}>
            <TbBrandLinkedin className={BrowseDetails.iconLike} />
            <p
              onClick={() =>
                Redirect('https://www.linkedin.com/in/ajiri-osiobe-801675184')
              }
              className={BrowseDetails.musicInfoDescription}
            >
              Follow on LinkedIn
            </p>
          </span>
          <span className={BrowseDetails.iconAndDesc}>
            <AiOutlineGithub className={BrowseDetails.iconLike} />
            <p
              onClick={() => Redirect('https://github.com/AJ-droi')}
              className={BrowseDetails.musicInfoDescription}
            >
              Follow on Github
            </p>
          </span>
        </div>
        <div className={BrowseDetails.artistInfo}>
          <div className={BrowseDetails.artistImg}>
            <img src={nonso} alt="artistImage" />
          </div>
          <h4 className={BrowseDetails.musicInfoHeader}>Chukwunonso Okoye</h4>
          <span className={BrowseDetails.iconAndDesc}>
            <TbBrandLinkedin className={BrowseDetails.iconLike} />
            <p
              onClick={() =>
                Redirect('https://www.linkedin.com/in/ajiri-osiobe-801675184')
              }
              className={BrowseDetails.musicInfoDescription}
            >
              Follow on LinkedIn
            </p>
          </span>
          <span className={BrowseDetails.iconAndDesc}>
            <AiOutlineGithub className={BrowseDetails.iconLike} />
            <p
              onClick={() => Redirect('https://github.com/AJ-droi')}
              className={BrowseDetails.musicInfoDescription}
            >
              Follow on Github
            </p>
          </span>
        </div>
        <div className={BrowseDetails.artistInfo}>
          <div className={BrowseDetails.artistImg}>
            <img src={bayero} alt="artistImage" />
          </div>
          <h4 className={BrowseDetails.musicInfoHeader}>Mohammed Bayero</h4>
          <span className={BrowseDetails.iconAndDesc}>
            <TbBrandLinkedin className={BrowseDetails.iconLike} />
            <p
              onClick={() =>
                Redirect('http://www.linkedin.com/in/muhammed-bayero-51781a11b')
              }
              className={BrowseDetails.musicInfoDescription}
            >
              Follow on LinkedIn
            </p>
          </span>
          <span className={BrowseDetails.iconAndDesc}>
            <AiOutlineGithub className={BrowseDetails.iconLike} />
            <p
              onClick={() => Redirect('https://github.com/AJ-droi')}
              className={BrowseDetails.musicInfoDescription}
            >
              Follow on Github
            </p>
          </span>
        </div>
        <div className={BrowseDetails.artistInfo}>
          <div className={BrowseDetails.artistImg}>
            <img src={gt} alt="artistImage" />
          </div>
          <h4 className={BrowseDetails.musicInfoHeader}>Omoregie Godstime</h4>
          <span className={BrowseDetails.iconAndDesc}>
            <TbBrandLinkedin className={BrowseDetails.iconLike} />
            <p
              onClick={() =>
                Redirect('https://www.linkedin.com/in/godstime-omoregie')
              }
              className={BrowseDetails.musicInfoDescription}
            >
              Follow on LinkedIn
            </p>
          </span>
          <span className={BrowseDetails.iconAndDesc}>
            <AiOutlineGithub className={BrowseDetails.iconLike} />
            <p
              onClick={() => Redirect('https://github.com/Omogod')}
              className={BrowseDetails.musicInfoDescription}
            >
              Follow on Github
            </p>
          </span>
        </div>
        <div className={BrowseDetails.artistInfo}>
          <div className={BrowseDetails.artistImg}>
            <img src={chidinma} alt="artistImage" />
          </div>
          <h4 className={BrowseDetails.musicInfoHeader}>
            Onyemelukwe Chidinma
          </h4>
          <span className={BrowseDetails.iconAndDesc}>
            <TbBrandLinkedin className={BrowseDetails.iconLike} />
            <p
              onClick={() =>
                Redirect('https://www.linkedin.com/in/chidinma-onyemelukwe-66398b202')
              }
              className={BrowseDetails.musicInfoDescription}
            >
              Follow on LinkedIn
            </p>
          </span>
          <span className={BrowseDetails.iconAndDesc}>
            <AiOutlineGithub className={BrowseDetails.iconLike} />
            <p
              onClick={() => Redirect('https://github.com/udokachi')}
              className={BrowseDetails.musicInfoDescription}
            >
              Follow on Github
            </p>
          </span>
          </div>
          <div className={BrowseDetails.artistInfo}>
            <div className={BrowseDetails.artistImg}>
              <img src={dora} alt="artistImage" />
            </div>
            <h4 className={BrowseDetails.musicInfoHeader}>Theodora Omaballa</h4>
            <span className={BrowseDetails.iconAndDesc}>
              <TbBrandLinkedin className={BrowseDetails.iconLike} />
              <p
                onClick={() =>
                  Redirect('https://www.linkedin.com/in/ajiri-osiobe-801675184')
                }
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on LinkedIn
              </p>
            </span>
            <span className={BrowseDetails.iconAndDesc}>
              <AiOutlineGithub className={BrowseDetails.iconLike} />
              <p
                onClick={() => Redirect('https://github.com/AJ-droi')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on Github
              </p>
            </span>
          </div>

          <div className={BrowseDetails.artistInfo}>
            <div className={BrowseDetails.artistImg}>
              <img src={justin} alt="artistImage" />
            </div>
            <h4 className={BrowseDetails.musicInfoHeader}>Justin Ewelike</h4>
            <span className={BrowseDetails.iconAndDesc}>
              <TbBrandLinkedin className={BrowseDetails.iconLike} />
              <p
                onClick={() =>
                  Redirect('https://www.linkedin.com/in/ajiri-osiobe-801675184')
                }
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on LinkedIn
              </p>
            </span>
            <span className={BrowseDetails.iconAndDesc}>
              <AiOutlineGithub className={BrowseDetails.iconLike} />
              <p
                onClick={() => Redirect('https://github.com/AJ-droi')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on Github
              </p>
            </span>
          </div>

          <div className={BrowseDetails.artistInfo}>
            <div className={BrowseDetails.artistImg}>
              <img src={bayo} alt="artistImage" />
            </div>
            <h4 className={BrowseDetails.musicInfoHeader}>Akinbayo Akinwande</h4>
            <span className={BrowseDetails.iconAndDesc}>
              <TbBrandLinkedin className={BrowseDetails.iconLike} />
              <p
                onClick={() =>
                  Redirect('https://www.linkedin.com/in/ajiri-osiobe-801675184')
                }
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on LinkedIn
              </p>
            </span>
            <span className={BrowseDetails.iconAndDesc}>
              <AiOutlineGithub className={BrowseDetails.iconLike} />
              <p
                onClick={() => Redirect('https://github.com/AJ-droi')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on Github
              </p>
            </span>
          </div>
          <div className={BrowseDetails.artistInfo}>
            <div className={BrowseDetails.artistImg}>
              <img src={boye} alt="artistImage" />
            </div>
            <h4 className={BrowseDetails.musicInfoHeader}>Adeboye Samuel</h4>
            <span className={BrowseDetails.iconAndDesc}>
              <TbBrandLinkedin className={BrowseDetails.iconLike} />
              <p
                onClick={() =>
                  Redirect('https://www.linkedin.com/in/ajiri-osiobe-801675184')
                }
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on LinkedIn
              </p>
            </span>
            <span className={BrowseDetails.iconAndDesc}>
              <AiOutlineGithub className={BrowseDetails.iconLike} />
              <p
                onClick={() => Redirect('https://github.com/AJ-droi')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on Github
              </p>
            </span>
          </div>
          <div className={BrowseDetails.artistInfo}>
            <div className={BrowseDetails.artistImg}>
              <img src={wale} alt="artistImage" />
            </div>
            <h4 className={BrowseDetails.musicInfoHeader}>Adewale Karounwi</h4>
            <span className={BrowseDetails.iconAndDesc}>
              <TbBrandLinkedin className={BrowseDetails.iconLike} />
              <p
                onClick={() =>
                  Redirect('https://www.linkedin.com/in/adewale-karounwi/')
                }
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on LinkedIn
              </p>
            </span>
            <span className={BrowseDetails.iconAndDesc}>
              <AiOutlineGithub className={BrowseDetails.iconLike} />
              <p
                onClick={() => Redirect('https://github.com/peak2')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on Github
              </p>
            </span>
          </div>
          <div className={BrowseDetails.artistInfo}>
            <div className={BrowseDetails.artistImg}>
              <img src={osaze} alt="artistImage" />
            </div>
            <h4 className={BrowseDetails.musicInfoHeader}>Osazee Imadonmwonyi</h4>
            <span className={BrowseDetails.iconAndDesc}>
              <TbBrandLinkedin className={BrowseDetails.iconLike} />
              <p
                onClick={() =>
                  Redirect('https://www.linkedin.com/in/ajiri-osiobe-801675184')
                }
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on LinkedIn
              </p>
            </span>
            <span className={BrowseDetails.iconAndDesc}>
              <AiOutlineGithub className={BrowseDetails.iconLike} />
              <p
                onClick={() => Redirect('https://github.com/imaosazee4github')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on Github
              </p>
            </span>
          </div>
          <div className={BrowseDetails.artistInfo}>
            <div className={BrowseDetails.artistImg}>
              <img src={joshua} alt="artistImage" />
            </div>
            <h4 className={BrowseDetails.musicInfoHeader}>
              Joshua Mamuzo Dogubo
            </h4>
            <span className={BrowseDetails.iconAndDesc}>
              <TbBrandLinkedin className={BrowseDetails.iconLike} />
              <p
                onClick={() =>
                  Redirect('https://www.linkedin.com/in/ajiri-osiobe-801675184')
                }
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on LinkedIn
              </p>
            </span>
            <span className={BrowseDetails.iconAndDesc}>
              <AiOutlineGithub className={BrowseDetails.iconLike} />
              <p
                onClick={() => Redirect('https://github.com/AJ-droi')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on Github
              </p>
            </span>
          </div>
          <div className={BrowseDetails.artistInfo}>
            <div className={BrowseDetails.artistImg}>
              <img src={prince} alt="artistImage" />
            </div>
            <h4>Prince Nmezi</h4>
            <span className={BrowseDetails.iconAndDesc}>
              <TbBrandLinkedin className={BrowseDetails.iconLike} />
              <p
                onClick={() =>
                  Redirect('https://www.linkedin.com/in/prince-nmezi')
                }
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on LinkedIn
              </p>
            </span>
            <span className={BrowseDetails.iconAndDesc}>
              <AiOutlineGithub className={BrowseDetails.iconLike} />
              <p
                onClick={() => Redirect('https://github.com/stephenprin')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on Github
              </p>
            </span>
          </div>
          <div className={BrowseDetails.artistInfo}>
            <div className={BrowseDetails.artistImg}>
              <img src={faith} alt="artistImage" />
            </div>
            <h4>Faith Alugbue</h4>
            <span className={BrowseDetails.iconAndDesc}>
              <TbBrandLinkedin className={BrowseDetails.iconLike} />
              <p
                onClick={() =>
                  Redirect('https://www.linkedin.com/in/faithalugbue/')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on LinkedIn
              </p>
            </span>
            <span className={BrowseDetails.iconAndDesc}>
              <AiOutlineGithub className={BrowseDetails.iconLike} />
              <p
                onClick={() => Redirect('https://github.com/chokovel')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on Github
              </p>
            </span>
          </div>
          <div className={BrowseDetails.artistInfo}>
            <div className={BrowseDetails.artistImg}>
              <img src={freke} alt="artistImage" />
            </div>
            <h4>Ndifreke Etukudo</h4>
            <span className={BrowseDetails.iconAndDesc}>
              <TbBrandLinkedin className={BrowseDetails.iconLike} />
              <p
                onClick={() =>
                  Redirect('https://www.linkedin.com/in/ndifreke-etukudo.')
                }
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on LinkedIn
              </p>
            </span>
            <span className={BrowseDetails.iconAndDesc}>
              <AiOutlineGithub className={BrowseDetails.iconLike} />
              <p
                onClick={() => Redirect('https://www.github.com/frekeB')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on Github
              </p>
            </span>
          </div>
          <div className={BrowseDetails.artistInfo}>
            <div className={BrowseDetails.artistImg}>
              <img src={tosin} alt="artistImage" />
            </div>
            <h4>OluwaTosin Adegoroye</h4>
            <span className={BrowseDetails.iconAndDesc}>
              <TbBrandLinkedin className={BrowseDetails.iconLike} />
              <p
                onClick={() =>
                  Redirect('https://www.linkedin.com/in/ajiri-osiobe-801675184')
                }
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on LinkedIn
              </p>
            </span>
            <span className={BrowseDetails.iconAndDesc}>
              <AiOutlineGithub className={BrowseDetails.iconLike} />
              <p
                onClick={() => Redirect('https://github.com/AJ-droi')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on Github
              </p>
            </span>
          </div>
          <div className={BrowseDetails.artistInfo}>
            <div className={BrowseDetails.artistImg}>
              <img src={ayoola} alt="artistImage" />
            </div>
            <h4>Akinpelu Abiodun</h4>
            <span className={BrowseDetails.iconAndDesc}>
              <TbBrandLinkedin className={BrowseDetails.iconLike} />
              <p
                onClick={() =>
                  Redirect('https://www.linkedin.com/mwlite/in/abiodun-akinpelu-20147a17')
                }
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on LinkedIn
              </p>
            </span>
            <span className={BrowseDetails.iconAndDesc}>
              <AiOutlineGithub className={BrowseDetails.iconLike} />
              <p
                onClick={() => Redirect('https://GitHub.com/matthabbey')}
                className={BrowseDetails.musicInfoDescription}
              >
                Follow on Github
              </p>
            </span>
          </div>
        </div>
      
        
      
      

      {/* <div className={BrowseDetails.music}>

					<div className={BrowseDetails.artistImg}>
						<img src={newrelease} alt="ProductiveMorning" />
					</div>
					<div className={BrowseDetails.artistInfo}>
						<h4 className={BrowseDetails.musicInfoHeader}>
							Productive Morning
						</h4>
						<span className={BrowseDetails.iconAndDesc}>
							<AiTwotoneHeart className={BrowseDetails.iconLike} />
							<p className={BrowseDetails.musicInfoDescription}>257,634</p>
						</span>
					</div>
				</div>
				<div className={BrowseDetails.music}>
					<div className={BrowseDetails.artistImg}>
						<img src={Queen} alt="WhiteNoise" />
					</div>
					<div className={BrowseDetails.artistInfo}>
						<h4 className={BrowseDetails.musicInfoHeader}>White Noise</h4>
						<span className={BrowseDetails.iconAndDesc}>
							<AiTwotoneHeart className={BrowseDetails.iconLike} />
							<p className={BrowseDetails.musicInfoDescription}>757,234</p>
						</span>
					</div>
				</div>
				<div className={BrowseDetails.music}>
					<div className={BrowseDetails.artistImg}>
						<img src={newrelease} alt="Nature" />
					</div>
					<div className={BrowseDetails.artistInfo}>
						<h4 className={BrowseDetails.musicInfoHeader}>Nature</h4>
						<span className={BrowseDetails.iconAndDesc}>
							<AiTwotoneHeart className={BrowseDetails.iconLike} />
							<p className={BrowseDetails.musicInfoDescription}>157,234</p>
						</span>
					</div>
				</div>
				<div className={BrowseDetails.music}>
					<div className={BrowseDetails.artistImg}>
						<img src={Queen} alt="BrainFood" />
					</div>
					<div className={BrowseDetails.artistInfo}>
						<h4 className={BrowseDetails.musicInfoHeader}>Brain Food</h4>
						<span className={BrowseDetails.iconAndDesc}>
							<AiTwotoneHeart className={BrowseDetails.iconLike} />
							<p className={BrowseDetails.musicInfoDescription}>357,234</p>
						</span>
					</div>
				</div>
				<div className={BrowseDetails.music}>
					<div className={BrowseDetails.artistImg}>
						<img src={newrelease} alt="MorningRush" />
					</div>
					<div className={BrowseDetails.artistInfo}>
						<h4 className={BrowseDetails.musicInfoHeader}>Morning Rush</h4>
						<span className={BrowseDetails.iconAndDesc}>
							<AiTwotoneHeart className={BrowseDetails.iconLike} />
							<p className={BrowseDetails.musicInfoDescription}>607,554</p>
						</span>
					</div>
				</div>
				</div> */}
    </div>
  );
}
export default About;
