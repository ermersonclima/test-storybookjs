import { ReactElement } from 'react'
import { Box01 } from '../styled-components/boxes'

interface BoxFieldProps {
    children?: ReactElement | null
    title?: string
}

const BoxField = ({children, title}: BoxFieldProps): ReactElement => {
    return (
        <Box01 width="1000px" height='500px' align="center">
            <Box01 align='left'>
                <span>{title || null}</span>
                {children}
            </Box01>
        </Box01>
    )
}

export default BoxField