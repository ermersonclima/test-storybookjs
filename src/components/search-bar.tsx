import { ReactElement } from 'react'
import { Button01 } from '../styled-components/buttons'
import { Box01 } from '../styled-components/boxes'

interface SearchBarProps {
    value: string
}

const SearchBar = (props: SearchBarProps): ReactElement => {
    return (
        <Box01 align="center" width="75%" height='20px'>
            <input type="text" />
            <Button01 type="button" color="success" value={props.value} />
        </Box01>
    )
}

export default SearchBar