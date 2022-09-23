import { useEffect } from "react"
import { useState } from "react"
import { API__MUSIC } from "../../../API"
import * as S from "./ListenedAlbuns.module.css"

export const ListenedAlbuns = () => {

    const [result, setResult] = useState([])

    return (
        <div className={S.container}>
            <div className={S.container__title}>
                <h3>Recently Listened Albuns</h3>
            </div>
            <ul className={S.list__cards__album}>
                <li className={S.card__album}>
                    <div className={S.card__description}>
                        <h4>Hip-Hop</h4>
                        <p>Teste</p>
                    </div>
                </li>
                <li className={S.card__album}>
                    <div className={S.card__description}>
                        <h4>Hip-Hop</h4>
                        <p>Teste</p>
                    </div>
                </li>
                <li className={S.card__album}>
                    <div className={S.card__description}>
                        <h4>Hip-Hop</h4>
                        <p>Teste</p>
                    </div>
                </li>
                <li className={S.card__album}>
                    <div className={S.card__description}>
                        <h4>Hip-Hop</h4>
                        <p>Teste</p>
                    </div>
                </li>
                <li className={S.card__album}>
                    <div className={S.card__description}>
                        <h4>Hip-Hop</h4>
                        <p>Teste</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}