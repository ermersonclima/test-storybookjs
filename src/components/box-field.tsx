import { ReactElement } from 'react'
import { Box01 } from '../styled-components/boxes'

interface BoxFieldProps {
    children?: ReactElement | null
}

const BoxField = ({children}: BoxFieldProps): ReactElement => {
    return (
        <Box01 width="1000px" height='500px' align="center">
            <Box01 align='left'>{children}</Box01>
        </Box01>
    )
}

export default BoxField