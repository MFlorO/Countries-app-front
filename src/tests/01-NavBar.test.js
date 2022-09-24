import React from 'react';
import { NavLink } from 'react-router-dom';
import { shallow , configure} from 'enzyme';
import NavBar from '../componentes/NavBar/NavBar.jsx';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("<NavBar />", () => {
    let nav;
    beforeEach(() => {
        nav = shallow(<NavBar />);
        expect(nav).toBeTruthy();
    });
  
    it('Debería renderizar cinco <NavLink />', () => {
        expect(nav.find(NavLink).length).toBeGreaterThanOrEqual(6);
    });

    it('Debería renderizar los NavLink con sus correspondientes rutas', () => {
        // Podes importar el componente Link de react-router-dom.
        expect(nav.find(NavLink).at(0).prop('to')).toEqual('/');
        expect(nav.find(NavLink).at(1).prop('to')).toEqual('/home');
        expect(nav.find(NavLink).at(2).prop('to')).toEqual('/create');
        expect(nav.find(NavLink).at(3).prop('to')).toEqual('/activities');
        expect(nav.find(NavLink).at(4).prop('to')).toEqual('/myList');
        expect(nav.find(NavLink).at(5).prop('to')).toEqual('/about');
    });

    it('Debería tener un Link con el texto "HOME" que cambie la ruta hacia "/home"', () => {
        // El orden en el que se declaran los Links es importante!
        expect(nav.find(NavLink).at(1).prop("to")).toEqual("/home");
        expect(nav.find(NavLink).at(1).text()).toEqual("HOME");
    });

    it('Debería tener un NavLink con el texto "CREATE YOUR ACTIVITY" que cambie la ruta hacia "/create"', () => {
        // El orden en el que se declaran los Links es importante!
        expect(nav.find(NavLink).at(2).prop("to")).toEqual("/create");
        expect(nav.find(NavLink).at(2).text()).toEqual("CREATE YOUR ACTIVITY");
    });

    it('Debería tener un NavLink con el texto "ACTIVITIES" que cambie la ruta hacia "/activities"', () => {
        // El orden en el que se declaran los Links es importante!
        expect(nav.find(NavLink).at(3).prop("to")).toEqual("/activities");
        expect(nav.find(NavLink).at(3).text()).toEqual("ACTIVITIES");
    });

    it('Debería tener un NavLink con el texto "MY LIST" que cambie la ruta hacia "/myList"', () => {
        // El orden en el que se declaran los Links es importante!
        expect(nav.find(NavLink).at(4).prop("to")).toEqual("/myList");
        expect(nav.find(NavLink).at(4).text()).toEqual("MY LIST");
    });

    it('Debería tener un NavLink con el texto "ABOUT" que cambie la ruta hacia "/about"', () => {
        // El orden en el que se declaran los Links es importante!
        expect(nav.find(NavLink).at(5).prop("to")).toEqual("/about");
        expect(nav.find(NavLink).at(5).text()).toEqual("ABOUT");
    });

  });
  