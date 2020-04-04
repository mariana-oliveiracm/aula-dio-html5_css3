import React from 'react';
import styled from 'styled-components';

const Content = styled.main `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

const ContentItem = styled.p `
    color: #6002A;
    text-aligh: center;
    font-family: 'Arial';
    padding: 10px;
    background-color: #FFCD5B;
    box-sizing: border-box;
    margin: 40px;
`

export default function content(){
    return(
        <Content>
            <ContentItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod laoreet tortor eget rutrum. Ut purus tortor, mattis id blandit in, eleifend a metus. Fusce lobortis turpis at urna rutrum feugiat accumsan a massa. Integer eget odio rhoncus, vestibulum nibh non, hendrerit libero. Proin et congue magna. Phasellus ullamcorper metus ligula, ac placerat lacus varius non. Suspendisse commodo faucibus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ullamcorper mi sed consectetur volutpat. Cras elementum euismod nunc, maximus tempus velit mollis at. Sed eget bibendum lacus, in bibendum risus. Aliquam erat volutpat. Aenean et arcu vehicula, consequat massa nec, efficitur tortor. Suspendisse consequat ultricies tortor ut cursus.
            </ContentItem>

            <ContentItem>
                Maecenas id enim at quam bibendum accumsan vitae in tortor. Cras aliquet libero nec leo laoreet, vitae gravida orci elementum. Nunc ex ligula, interdum sit amet feugiat vel, commodo ultrices mauris. Cras molestie diam quis semper aliquet. Donec eget ipsum a eros fermentum volutpat suscipit a est. Proin id libero sed felis sagittis maximus. Sed est mi, mattis ut sapien sit amet, molestie pellentesque justo. Morbi ullamcorper elit id libero tincidunt, eget feugiat augue interdum. In hac habitasse platea dictumst. Vestibulum vulputate odio sed purus fermentum, a lacinia urna tincidunt.
            </ContentItem>
        </Content>
    );
}