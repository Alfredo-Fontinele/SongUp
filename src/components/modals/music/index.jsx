import * as S from './style'
import { toast } from 'react-toastify'
import { FiLogOut } from 'react-icons/fi'
import { RiDeleteBackFill } from 'react-icons/ri'
import { FaMusic, FaHeart } from 'react-icons/fa'
import { ModalStructure } from "../layout"
import { useState } from 'react'

export const ModalMusic = ({ favorites, setFavorites, cardCurrent, setCardCurrent }) => {
    const [favoriteStatus, setFavoriteStatus] = useState(false)
    const { count, artist_name, id, preview, img, title_short } = cardCurrent

    const validation = (arr, id) => {
        return arr.some((arr) => arr.id === id)
    }

    const filterList = (arr, id) => {
        return arr.filter((arr) => arr.id !== id)
    }

    const addFavorite = (id) => {
        const result = validation(favorites, id)
        if (!result) {
            const info = {
                id: id,
                img: img,
                title_short: title_short,
                artist_name: artist_name
            }
            setFavoriteStatus(true)
            setFavorites((previous) => [...previous, info])
            toast.success("Musica Adicionada aos Favoritos")
        }
    }

    const removeFavorite = () => {
        const listFilter = filterList(favorites, id)
        setFavoriteStatus(false)
        setFavorites(listFilter)
        toast.error("Musica Removida dos Favoritos")
    }

    return (
        <ModalStructure>
            <S.ModalMusic>
                {!favoriteStatus ? (
                    <FaHeart id="FaHeart" onClick={() => addFavorite(id)} title="Adicionar aos Favoritos"/>
                ) : (
                    <RiDeleteBackFill id="FaHeart" onClick={() => removeFavorite(id)} title="Remover dos Favoritos"/>
                )}
                <FiLogOut id="FiLogOut" title="Fechar Modal" onClick={() => setCardCurrent(false)}/>
                <img src={img} alt={title_short} />
                <div>
                    <h2>{title_short}</h2>
                    <p>{artist_name}</p>
                </div>
                <audio src={preview} controls></audio>
            </S.ModalMusic>
        </ModalStructure>
    )
}
