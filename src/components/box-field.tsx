import { ReactElement } from 'react'
import { Box01 } from '../styled-components/boxes'

interface BoxFieldProps {
    children?: ReactElement | null
    title?: string
}

const BoxField = (props: BoxFieldProps): ReactElement => {
    return (
        <Box01 width="1000px" height='500px' align="center">
            <Box01 align='left'>
                <span>{props.title || null}</span>
                {props.children}
            </Box01>
        </Box01>
    )
}

export default BoxField