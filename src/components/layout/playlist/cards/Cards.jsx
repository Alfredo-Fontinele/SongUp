import "./Cards.module.css"

export const Cards = async ({ picture_small, title_short, name, duration }) => {
    return (
        <>
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
        </>
    )
}
