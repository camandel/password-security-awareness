import React, { useEffect } from 'react';
// Components
import MenuItem from '../MenuItem'
// Styles
import { Content } from './Menu.styles';

const menuItems = {
    introduction: 0,
    database: null,
    media: null,
    quiz: null,
};

const Menu = () => {
    useEffect(() => {
        const menuActivate = () => {
            //var section = document.querySelectorAll(".section");
            //var i = 0;
            // Array.prototype.forEach.call(section, function (e) {
            //     sections[e.id] = e.offsetTop;
            //     console.log(e.id, e.offsetTop);
            // });
            menuItems["introduction"] = 0;
            menuItems["database"] = document.getElementById("database").offsetTop;
            menuItems["media"] = document.getElementById("media").offsetTop;
            menuItems["quiz"] = document.body.scrollHeight;
            //console.log(menuItems);

            window.onscroll = function () {
                var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
                for (let i in menuItems) {
                    if (menuItems[i] <= scrollPosition) {
                        //console.log("change active: ", i, sections[i], scrollPosition);
                        document.querySelector('.active').setAttribute('class', '');
                        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
                    }
                }
            };
        };

        menuActivate();
    }, []);

    const menuList = Object.keys(menuItems).map((e, i) => {
        return <MenuItem itemName={e} key={`menuitem_${i}`} className={e === "introduction" ? "active" : ""} />
    })

    return (
        <section>
            <Content>
                <ul>
                    {menuList}
                </ul>
            </Content>
        </section>
    );
}

export default Menu