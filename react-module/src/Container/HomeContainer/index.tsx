import { Input, Text } from '../../components';

const HomeContainer = () => {

    return (
        <>
            <div>
                <Text>{'Nama'}</Text>
                <Input className="block border-neutral-400  border" />
            </div>
            <div>
                <Text>{'Umur'}</Text>
                <Input className="block border-neutral-400  border" />
            </div>
            <div>
                <Text>{'Hobi'}</Text>
                <Input className="block border-neutral-400  border" />
            </div>
        </>
    )
} 

export default HomeContainer;