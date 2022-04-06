import { ReactElement } from 'react'
import { Box01 } from '../styled-components/boxes'

interface ResultFieldProps {
    children?: ReactElement | null
}

const ResultField = (props: ResultFieldProps): ReactElement => {
    return (
        <Box01 width="75%" height='20px' align="left" curve>{props.children}</Box01>
    )
}

export default ResultField