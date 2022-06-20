import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import contacts from "./data/contacts.json";

const App = () => {
    // Masukkan Header dan Contact ke dalam div App
    return (
        <div className="App">
            <Header />
            {contacts.map((contact) => {
                return (
                    <Contact
                        name={contact.name}
                        email={contact.email}
                        phone={contact.phone}
                        photo={contact.photo}
                    />
                );
            })}
        </div>
    );
};

export default App;
