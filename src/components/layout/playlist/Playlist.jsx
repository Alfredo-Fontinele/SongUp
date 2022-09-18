import * as S from './Playlist.module.css'
import { IoMdClose } from 'react-icons/io'
import { BiPlay, BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaPlay, FaPause } from 'react-icons/fa'

export const Playlist = () => {
    return (
        <aside className={S.playlist}>
            <div className={S.btn__close}>
                <IoMdClose/>
            </div>
            <div className={S.playlist__container}>
                <h4>Next Playlist</h4>
                <ul className={S.cards__playlist}>
                    <li className={S.card__music}>
                        <div className={S.card__left}>
                            <div className={S.card__img}>
                                <img src="https://i1.sndcdn.com/artworks-000113709736-3ovzk8-t500x500.jpg" alt="" />
                            </div>
                            <div className={S.card__description}>
                                <h3>Naturally</h3>
                                <p>Tinashe</p>
                            </div>
                        </div>
                        <div className={S.card__right}>
                            <BsThreeDotsVertical/>
                        </div>
                    </li>
                    <li className={S.card__music}>
                        <div className={S.card__left}>
                            <div className={S.card__img}>
                                <img src="https://i.scdn.co/image/ab67616d0000b273f4386b4b6a4d3b807f97021d" alt="" />
                            </div>
                            <div className={S.card__description}>
                                <h3>Naturally</h3>
                                <p>Tinashe</p>
                            </div>
                        </div>
                        <div className={S.card__right}>
                            <BsThreeDotsVertical/>
                        </div>
                    </li>
                    <li className={S.card__music}>
                        <div className={S.card__left}>
                            <div className={S.card__img}>
                                <img src="https://www.letras.com.br/storage/artista/7/c/9/7c9e6.jpg" alt="" />
                            </div>
                            <div className={S.card__description}>
                                <h3>Naturally</h3>
                                <p>Tinashe</p>
                            </div>
                        </div>
                        <div className={S.card__right}>
                            <BsThreeDotsVertical/>
                        </div>
                    </li>
                    <li className={S.card__music}>
                        <div className={S.card__left}>
                            <div className={S.card__img}>
                                <img src="https://i1.sndcdn.com/artworks-000113709736-3ovzk8-t500x500.jpg" alt="" />
                            </div>
                            <div className={S.card__description}>
                                <h3>Naturally</h3>
                                <p>Tinashe</p>
                            </div>
                        </div>
                        <div className={S.card__right}>
                            <BsThreeDotsVertical/>
                        </div>
                    </li>
                    <li className={S.card__music}>
                        <div className={S.card__left}>
                            <div className={S.card__img}>
                                <img src="https://i.scdn.co/image/ab67616d0000b273f4386b4b6a4d3b807f97021d" alt="" />
                            </div>
                            <div className={S.card__description}>
                                <h3>Naturally</h3>
                                <p>Tinashe</p>
                            </div>
                        </div>
                        <div className={S.card__right}>
                            <BsThreeDotsVertical/>
                        </div>
                    </li>
                    <li className={S.card__music}>
                        <div className={S.card__left}>
                            <div className={S.card__img}>
                                <img src="https://www.letras.com.br/storage/artista/7/c/9/7c9e6.jpg" alt="" />
                            </div>
                            <div className={S.card__description}>
                                <h3>Naturally</h3>
                                <p>Tinashe</p>
                            </div>
                        </div>
                        <div className={S.card__right}>
                            <BsThreeDotsVertical/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={S.music__now}>
                <div className={S.card__music__now}>
                    <div className={S.music__description}>
                        <h3>Naturally</h3>
                        <p>Tinashe</p>
                    </div>
                    <div className={S.music__controls}>
                        <BiSkipPrevious/>
                        <BiPlay/>
                        {/* <FaPause/> */}
                        <BiSkipNext/>
                    </div>
                </div>
            </div>
        </aside>
    )
}