import * as S from './Container.module.css'

export const Container = (props) => {
    return (
        <div className={S.container}>
            {props.children}
        </div>
    )
}