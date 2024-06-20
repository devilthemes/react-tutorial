import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
export const Elements = () => {
    return (
        <>
            <SiteHeader />
            <section id="main">
                <div className="inner">
                    <header className="major special"><h1>Elements</h1>
                        <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                    </header>

                    <h3>Text</h3>
                    <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                        This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                        This is <u>underlined</u> and this is code: <code>for (;;) &lcub; ... &rcub;</code>. Finally, <a href="#">this is a link</a>.</p>

                    <hr /><header><h3>Heading with a Subtitle</h3>
                        <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                    </header><p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                    <header><h4>Heading with a Subtitle</h4>
                        <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                    </header><p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>

                    <hr /><h2>Heading Level 2</h2>
                    <h3>Heading Level 3</h3>
                    <h4>Heading Level 4</h4>
                    <h5>Heading Level 5</h5>
                    <h6>Heading Level 6</h6>

                    <hr />
                    <section>
                        <h4>Blockquote</h4>
                        <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>

                        <h4>Preformatted</h4>
                        <pre></pre>
                    </section>
                    <section><h3>Lists</h3>
                        <div className="row">
                            <div className="6u 12u$(xsmall)">

                                <h4>Unordered</h4>
                                <ul><li>Dolor pulvinar etiam magna etiam.</li>
                                    <li>Sagittis adipiscing lorem eleifend.</li>
                                    <li>Felis enim feugiat dolore viverra.</li>
                                </ul><h4>Alternate</h4>
                                <ul className="alt"><li>Dolor pulvinar etiam magna etiam.</li>
                                    <li>Sagittis adipiscing lorem eleifend.</li>
                                    <li>Felis enim feugiat dolore viverra.</li>
                                </ul></div>
                            <div className="6u$ 12u$(xsmall)">

                                <h4>Ordered</h4>
                                <ol><li>Dolor pulvinar etiam magna etiam.</li>
                                    <li>Etiam vel felis at lorem sed viverra.</li>
                                    <li>Felis enim feugiat dolore viverra.</li>
                                    <li>Dolor pulvinar etiam magna etiam.</li>
                                    <li>Etiam vel felis at lorem sed viverra.</li>
                                    <li>Felis enim feugiat dolore viverra.</li>
                                </ol><h4>Icons</h4>
                                <ul className="icons"><li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                                    <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                                    <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                                    <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                                    <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                                    <li><a href="#" className="icon fa-tumblr"><span className="label">Tumblr</span></a></li>
                                </ul></div>
                        </div>

                        <h4>Actions</h4>
                        <ul className="actions"><li><a href="#" className="button special">Special</a></li>
                            <li><a href="#" className="button">Default</a></li>
                            <li><a href="#" className="button alt">Alternate</a></li>
                        </ul><ul className="actions small"><li><a href="#" className="button special small">Small</a></li>
                            <li><a href="#" className="button small">Small</a></li>
                            <li><a href="#" className="button alt small">Small</a></li>
                        </ul><div className="row">
                            <div className="3u 6u(small) 12u$(xsmall)">
                                <ul className="actions vertical"><li><a href="#" className="button special">Vertical</a></li>
                                    <li><a href="#" className="button">Vertical</a></li>
                                    <li><a href="#" className="button alt">Vertical</a></li>
                                </ul></div>
                            <div className="3u 6u$(small) 12u$(xsmall)">
                                <ul className="actions vertical small"><li><a href="#" className="button special small">Small</a></li>
                                    <li><a href="#" className="button small">Small</a></li>
                                    <li><a href="#" className="button alt small">Small</a></li>
                                </ul></div>
                            <div className="3u 6u(small) 12u$(xsmall)">
                                <ul className="actions vertical"><li><a href="#" className="button special fit">Fit</a></li>
                                    <li><a href="#" className="button fit">Fit</a></li>
                                    <li><a href="#" className="button alt fit">Fit</a></li>
                                </ul></div>
                            <div className="3u$ 6u$(small) 12u$(xsmall)">
                                <ul className="actions vertical small"><li><a href="#" className="button special small fit">Small</a></li>
                                    <li><a href="#" className="button small fit">Small</a></li>
                                    <li><a href="#" className="button alt small fit">Small</a></li>
                                </ul></div>
                        </div>
                    </section>
                    <section><h3>Table</h3>
                        <h4>Default</h4>
                        <div className="table-wrapper">
                            <table><thead><tr><th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr></thead><tbody><tr><td>Item 1</td>
                                <td>Ante turpis integer aliquet porttitor.</td>
                                <td>29.99</td>
                            </tr><tr><td>Item 2</td>
                                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                        <td>19.99</td>
                                    </tr><tr><td>Item 3</td>
                                        <td> Morbi faucibus arcu accumsan lorem.</td>
                                        <td>29.99</td>
                                    </tr><tr><td>Item 4</td>
                                        <td>Vitae integer tempus condimentum.</td>
                                        <td>19.99</td>
                                    </tr><tr><td>Item 5</td>
                                        <td>Ante turpis integer aliquet porttitor.</td>
                                        <td>29.99</td>
                                    </tr></tbody><tfoot><tr><td colSpan="2"></td>
                                        <td>100.00</td>
                                    </tr></tfoot></table></div>
                        <h4>Alternate</h4>
                        <div className="table-wrapper">
                            <table className="alt"><thead><tr><th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr></thead><tbody><tr><td>Item 1</td>
                                <td>Ante turpis integer aliquet porttitor.</td>
                                <td>29.99</td>
                            </tr><tr><td>Item 2</td>
                                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                        <td>19.99</td>
                                    </tr><tr><td>Item 3</td>
                                        <td> Morbi faucibus arcu accumsan lorem.</td>
                                        <td>29.99</td>
                                    </tr><tr><td>Item 4</td>
                                        <td>Vitae integer tempus condimentum.</td>
                                        <td>19.99</td>
                                    </tr><tr><td>Item 5</td>
                                        <td>Ante turpis integer aliquet porttitor.</td>
                                        <td>29.99</td>
                                    </tr></tbody><tfoot><tr><td colSpan="2"></td>
                                        <td>100.00</td>
                                    </tr></tfoot></table></div>
                    </section>
                    <section><h3>Buttons</h3>
                        <ul className="actions"><li><a href="#" className="button special">Special</a></li>
                            <li><a href="#" className="button">Default</a></li>
                            <li><a href="#" className="button alt">Alternate</a></li>
                        </ul><ul className="actions"><li><a href="#" className="button special big">Big</a></li>
                            <li><a href="#" className="button">Default</a></li>
                            <li><a href="#" className="button alt small">Small</a></li>
                        </ul><div className="row">
                            <div className="6u 12u$(xsmall)">
                                <ul className="actions fit"><li><a href="#" className="button fit">Fit</a></li>
                                    <li><a href="#" className="button alt fit">Fit</a></li>
                                </ul></div>
                            <div className="6u$ 12u$(xsmall)">
                                <ul className="actions fit small"><li><a href="#" className="button fit small">Fit + Small</a></li>
                                    <li><a href="#" className="button alt fit small">Fit + Small</a></li>
                                </ul></div>
                        </div>
                        <ul className="actions"><li><a href="#" className="button special icon fa-download">Icon</a></li>
                            <li><a href="#" className="button icon fa-download">Icon</a></li>
                            <li><a href="#" className="button alt icon fa-download">Icon</a></li>
                        </ul><ul className="actions"><li><span className="button special disabled">Special</span></li>
                            <li><span className="button disabled">Default</span></li>
                            <li><span className="button alt disabled">Alternate</span></li>
                        </ul></section>
                    <section><h3>Form</h3>
                        <form method="post" action="#">
                            <div className="row uniform 50%">
                                <div className="6u 12u$(xsmall)">
                                    <input type="text" name="demo-name" id="demo-name" onChange={()=>{}} value="" placeholder="Name" /><div data-lastpass-icon-root="true" style={{ "position": "relative !important", "height": "0px !important", "width": "0px !important", "float": "left !important" }}></div></div>
                                <div className="6u$ 12u$(xsmall)">
                                    <input type="email" name="demo-email" id="demo-email" onChange={()=>{}} value="" placeholder="Email" /></div>
                                <div className="12u$">
                                    <div className="select-wrapper">
                                        <select name="demo-category" defaultValue="" onChange={()=>{}} id="demo-category"><option value="">- Category -</option><option value="1">Manufacturing</option><option value="1">Shipping</option><option value="1">Administration</option><option value="1">Human Resources</option></select></div>
                                </div>
                                <div className="4u 12u$(xsmall)">
                                    <input type="radio" id="priority-low" name="priority" checked="" /><label htmlFor="priority-low">Low Priority</label>
                                </div>
                                <div className="4u 12u$(xsmall)">
                                    <input type="radio" id="priority-normal" name="priority" /><label htmlFor="priority-normal">Normal Priority</label>
                                </div>
                                <div className="4u$ 12u$(xsmall)">
                                    <input type="radio" id="priority-high" name="priority" /><label htmlFor="priority-high">High Priority</label>
                                </div>
                                <div className="6u 12u$(small)">
                                    <input type="checkbox" id="copy" name="copy" /><label htmlFor="copy">Email me a copy of this message</label>
                                </div>
                                <div className="6u$ 12u$(small)">
                                    <input type="checkbox" id="human" name="human" checked="" /><label htmlFor="human">I am a human and not a robot</label>
                                </div>
                                <div className="12u$">
                                    <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6" data-gramm="false" wt-ignore-input="true"></textarea></div>
                                <div className="12u$">
                                    <ul className="actions"><li><input type="submit" value="Send Message" className="special" /></li>
                                        <li><input type="reset" value="Reset" /></li>
                                    </ul></div>
                            </div>
                        </form>
                    </section>
                    <section>
                        <h3>Image</h3>
                        <h4>Fit</h4>
                        <div className="box alt">
                            <div className="row 50% uniform">
                                <div className="12u$"><span className="image fit"></span></div>
                                <div className="4u"><span className="image fit"></span></div>
                                <div className="4u"><span className="image fit"></span></div>
                                <div className="4u$"><span className="image fit"></span></div>
                                <div className="4u"><span className="image fit"></span></div>
                                <div className="4u"><span className="image fit"></span></div>
                                <div className="4u$"><span className="image fit"></span></div>
                                <div className="4u"><span className="image fit"></span></div>
                                <div className="4u"><span className="image fit"></span></div>
                                <div className="4u$"><span className="image fit"></span></div>
                            </div>
                        </div>

                        <h4>Left &amp; Right</h4>
                        <p><span className="image left"></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                        <p><span className="image right"></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                    </section>

                </div>
            </section>
            <SiteFooter />
        </>
    )
}