import React from 'react';

const Map = () => {
    return (
        <div>
        <section className="map-area">
            <div id="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.6863909310614!2d27.378159015341968!3d38.61008787961599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b99cdc6eb147a3%3A0x798a617a9e68f51!2sManisa%20Celal%20Bayar%20%C3%9Cniversitesi%20S%C3%BCleyman%20Demirel%20K%C3%BClt%C3%BCr%20Merkezi!5e0!3m2!1sen!2str!4v1574170108828!5m2!1sen!2str" className="map" allowFullScreen="">

                </iframe>

            </div>
        </section>

        <style jsx>{`
           .map {
                width: 100%;
                height: 100%
           } 
        `}</style>
        </div>
    );
};

export default Map;
