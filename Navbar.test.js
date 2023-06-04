// Navbar.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

// Test case 1: Verify the rendering and props
test('renders a navbar with correct icon and links', () => {
    const icon = <i className="fa fa-bars"></i>;
    const links = ['Home', 'About', 'Contact'];

    const { getByText } = render(<Navbar icon={icon} links={links} />);
    const iconElement = getByText(/fa fa-bars/);
    const linkElements = links.map(link => getByText(link));

    expect(iconElement).toBeInTheDocument();
    expect(linkElements.length).toBe(links.length);
    linkElements.forEach(linkElement => {
        expect(linkElement).toBeInTheDocument();
    });
});
