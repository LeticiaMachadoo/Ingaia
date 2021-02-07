import styled from 'styled-components';
import ContainerHeights from '../../../styles/enums/ContainerHeights';

const mainHeight = `calc(100vh - ${ContainerHeights.Header} - ${ContainerHeights.Footer})`;

const Main = styled.main({
    overflow: 'scroll',
    minHeight: mainHeight,
    height: mainHeight,
    maxHeight: mainHeight,
});

export default Main;
