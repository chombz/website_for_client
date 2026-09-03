import React, { useState, useEffect, useCallback } from 'react';

// Importing styles - assuming these paths are correct
import '../../styles/Media.css';
import '../../styles/App.css';
import '../../styles/PhotoGalleryCustom.css'; // Custom CSS for photo gallery
import '../../styles/NewspaperClippingsCustom.css'; // Custom CSS for newspaper clippings

// --- Media Data ---
const mediaContent = {
    youtubeVideos: [
        {
            id: 'Y01',
            title: 'Empowering Youth: Our Workshop',
            embedId: 'UceRMinT77s',
            description: 'A glimpse into our workshop focused on youth empowerment and skill-building.',
        },
        {
            id: 'Y02',
            title: 'Vijana Wafunzwa Mbinu za Kujitegemea',
            embedId: '-ZocGYzcrds',
            description: 'Youth learning valuable self-reliance techniques and skills through our program.',
        },
        {
            id: 'Y03',
            title: 'Youth Receive ETP Training',
            embedId: '1y9T9XnVqyI',
            description: 'Watch as youth participants engage in ETP\'s comprehensive training sessions.',
        },
        {
            id: 'Y04',
            title: 'ETP economic empowerment Training',
            embedId: 'D3B8Kz_xWAg',
            description: 'An overview of ETP\'s impactful training program designed for economic empowerment.',
        },
        {
            id: 'Y05',
            title: 'NGO Entrepreneurship training Programme (ETP) conducts free training in Langata',
            embedId: 'gsGay5qoiHM',
            description: 'ETP\'s free entrepreneurship training session making a difference in Langata.',
        },
        {
            id: 'Y06',
            title: 'Entrepreneurship training Programme (ETP) conducts training in on entrepreneurship and procurement',
            embedId: '2fQf1H_DJEA',
            description: 'ETP\'s specialized training covering key aspects of entrepreneurship and procurement processes.',
        },
        {
            id: 'Y07',
            title: 'Entrepreneurship training Programme (ETP) conducts training in Kasarani',
            embedId: '3NYLcI4rnIo',
            description: 'Scenes from ETP\'s entrepreneurship training program conducted in the Kasarani area.',
        },
        {
            id: 'Y08',
            title: 'Donating Soaps and Hand Sanitizers',
            embedId: 'bEzqCtSp5cg',
            description: 'Highlights from our initiative to donate essential hygiene products to the community.',
        },
    ],
    facebookPosts: [
        {
            id: 'FB01_left',
            title: 'Community Drive Success!',
            embedHtml: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0Kb91jFiPx3jHyf6MhpvCyPfbCqpaSEubbU1MwWg226KwNqWjYPVaKzBE6kwY53QXl%26id%3D333498257344178&show_text=true&width=500" width="500" height="616" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
            description: 'See the highlights from our recent community drive.',
        },
        {
            id: 'FB02_right',
            title: 'Awarding for the training programme',
            embedHtml: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0P4KH3UhqiSznsGPaHL92sKYxa9kmhct5meHLsCkA6vtGBhP6ZV8gK1Hdm1VdoDP6l%26id%3D100070205743092l%26id%3D333498257344178&show_text=true&width=500" width="500" height="616" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
            description: 'This is a placeholder for another distinct Facebook post.',
        },
    ],
    imageArticles: [
        {
            id: 'A01',
            title: 'Entrepreneur with a passion for imparting business skills to youth',
            url: 'https://www.businessdailyafrica.com/bd/corporate/enterprise/entrepreneur-with-a-passion-for-imparting-business-skills-to-youth-2244654',
            source: 'Business Daily',
            logoImage: '/images/logo/business.jpg',
            articleImage: '/images/logo/news_article/bussiness_article.png',
            websiteLogo: '/images/logo/news_article/bussiness_logo.png',
            summary: 'A feature on an entrepreneur\'s dedication to mentoring youth in business and entrepreneurship skills.',
        },
        {
            id: 'A02',
            title: 'Youths benefit from free training on entrepreneurship',
            url: 'https://www.standardmedia.co.ke/article/2001316845/youths-benefit-from-free-training-on-entrepreneurship',
            source: 'The Standard',
            logoImage: '/images/logo/standardd.jpg',
            articleImage: '/images/logo/news_article/standard_article1.png',
            websiteLogo: '/images/logo/news_article/stardard_logo.png',
            summary: 'Coverage of our free training sessions aimed at equipping young people with practical entrepreneurship knowledge.',
        },
        {
            id: 'A03',
            title: 'Teaching the youth how to fish is his passion',
            url: 'https://nation.africa/kenya/life-and-style/smart-company/teaching-the-youth-how-to-fish-is-his-passion--750278',
            source: 'Daily Nation',
            logoImage: '/images/logo/DailyNation.jpg',
            articleImage: '/images/logo/news_article/daily_nation.png',
            websiteLogo: '/images/logo/news_article/daily.png',
            summary: 'An inspiring story of a changemaker focused on empowering youth with long-term self-reliance through skills and training.',
        },
        {
            id: 'A04',
            title: 'NGO trains youth on accessing procurement program',
            url: 'https://www.standardmedia.co.ke/article/2001327785/ngo-trains-youth-on-accessing-procurement-program',
            source: 'The Standard',
            logoImage: '/images/logo/standardd.jpg',
            articleImage: '/images/logo/news_article/standard_article.png',
            websiteLogo: '/images/logo/news_article/stardard_logo.png',
            summary: 'A report on how our NGO is guiding youth to benefit from government procurement opportunities through specialized training.',
        },
    ],

    photoGallery: [
        {
            id: 'photo1',
            type: 'Horizontal Photo',
            previewImg: '/images/photos/pic1.jpg',
            title: 'Engaging with the Community',
            description: 'A team member discussing with local community members during an initiative focused on youth empowerment.',
        },
        {
            id: 'photo2',
            type: 'Vertical Photo',
            previewImg: '/images/photos/pic2.jpg',
            title: 'Recognizing Empowered Youth',
            description: 'A moment captured where a man stands near a visual highlighting the impact of our programs on the youth.',
        },
        {
            id: 'photo3',
            type: 'Vertical Photo',
            previewImg: '/images/photos/pic5.jpg',
            title: 'Community Dialogue',
            description: 'A lady engaging actively with a group of people, fostering dialogue within the community.',
        },
        {
            id: 'photo4',
            type: 'Horizontal Photo',
            previewImg: '/images/photos/pic3.jpg',
            title: 'Youth Empowerment Initiative',
            description: 'A group of five individuals participating in a community talk under the banner: "Vision: Responsible and Empowering Youth, Building a Better Kenya. Mission: Maximize the full potential of youth through participatory engagement and solve their needs and aspirations."',
        },
        {
            id: 'photo5',
            type: 'Horizontal Photo',
            previewImg: '/images/photos/pic4.jpg',
            title: 'Media Interview',
            description: 'Being interviewed by media representatives; a lady speaks into a microphone while the camera rolls.',
        },
        {
            id: 'photo6',
            type: 'Horizontal Photo',
            previewImg: '/images/photos/pic6.jpg',
            title: 'Community Tree Planting',
            description: 'Participants actively planting trees as part of our environmental initiative.',
        },
        {
            id: 'photo7',
            type: 'Horizontal Photo',
            previewImg: '/images/photos/pic7.jpg',
            title: 'Serving the Youth',
            description: 'Serving food to youth after a training event at the Community Self-Empowering Center in Kawangware.',
        },
        {
            id: 'photo8',
            type: 'Horizontal Photo',
            previewImg: '/images/photos/pic8.jpg',
            title: 'Watering New Plants',
            description: 'A close-up of tree planting, with a participant holding a watering can to nourish the newly planted sapling.',
        },
        {
            id: 'photo9',
            type: 'Horizontal Photo',
            previewImg: '/images/photos/pic9.jpg',
            title: 'Certificate of Participation',
            description: 'A Certificate showing participating in the Entrepreneurship Training Program',
        },
    ],

    // --- Newspaper Clippings Data (UPDATED titles and types) ---
    newspaperClippings: [
        {
            id: 'NC02',
            type: 'Horizontal Clipping', // Retained original orientation type
            title: 'Daily Nation', // Renamed title
            image: '/images/newspaper_clippings/559.jpg',
        },
        {
            id: 'NC01',
            type: 'Vertical Clipping', // Original type
            title: 'Daily Nation', // Renamed title
            image: '/images/newspaper_clippings/news_paper1.jpg',
        },
        {
            id: 'NC03',
            type: 'Vertical Clipping',
            title: 'Weekly Citizen', // Renamed title
            image: '/images/newspaper_clippings/news_paper3.jpg',
        },
        {
            id: 'NC04',
            type: 'Vertical Clipping',
            title: 'PeopleDaily', // Renamed title
            image: '/images/newspaper_clippings/news_paper4.jpg',
        },
        {
            id: 'NC05',
            type: 'Vertical Clipping',
            title: 'Daily Nation', // Renamed title
            image: '/images/newspaper_clippings/news_paper5.jpg',
        },
        {
            id: 'NC06',
            type: 'Horizontal Clipping',
            title: 'Empowering Youth to Venture out their Own', // Retained original title
            image: '/images/newspaper_clippings/560.jpg',
        },
    ],
};

function Media()
{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClippingImage, setSelectedClippingImage] = useState('');
    const [selectedClippingTitle, setSelectedClippingTitle] = useState('');

    useEffect(() =>
    {
        if (window.FB)
        {
            window.FB.XFBML.parse();
        }
    }, []);

    const openModal = useCallback((image, title) =>
    {
        setSelectedClippingImage(image);
        setSelectedClippingTitle(title);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeModal = useCallback(() =>
    {
        setIsModalOpen(false);
        setSelectedClippingImage('');
        setSelectedClippingTitle('');
        document.body.style.overflow = 'auto';
    }, []);

    useEffect(() =>
    {
        const handleEsc = (event) =>
        {
            if (event.key === 'Escape')
            {
                closeModal();
            }
        };

        if (isModalOpen)
        {
            document.addEventListener('keydown', handleEsc);
        }

        return () =>
        {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isModalOpen, closeModal]);

    return (
        <div className="media-container">
            <h1>Our Activities & Media Showcase</h1>

            <p className="media-intro">
                Explore our journey and impact through videos, social media highlights, and news features.
                Here, we share the stories of change, empowerment, and community engagement that define our work.
            </p>

            {/* --- YouTube Videos Section --- */}
            <section className="media-section">
                <h2 className="section-title-left">Videos</h2>
                <div className="video-grid">
                    {mediaContent.youtubeVideos.map((video) => (
                        <div key={video.id} className="video-item card">
                            <div className="video-responsive">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.embedId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="video-info">
                                <h3>{video.title}</h3>
                                <p>{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Facebook Posts Section --- */}
            <section className="media-section">
                <h2 className="section-title-left">Social Media Highlights</h2>
                <div className="facebook-posts-container">
                    {mediaContent.facebookPosts.map((post) => (
                        <div key={post.id} className="facebook-item card">
                            <div className="facebook-embed-container">
                                <div dangerouslySetInnerHTML={{ __html: post.embedHtml }} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Image-Based Articles Section --- */}
            <section className="media-section">
                <h2 className="section-title-left">Press Coverage & Articles</h2>
                <div className="image-articles-grid">
                    {mediaContent.imageArticles.map((article) => (
                        <div key={article.id} className="image-article-card">
                            <div className="image-article-header">
                                <img
                                    src={article.logoImage}
                                    alt={`${article.source} logo`}
                                    className="publication-logo"
                                />
                                <div className="image-article-meta">
                                    <h3 className="image-article-title">{article.title}</h3>
                                    <p className="image-article-source">Published by {article.source}</p>
                                </div>
                            </div>
                            <div className="image-article-preview">
                                <img
                                    src={article.articleImage}
                                    alt={`Preview of ${article.title}`}
                                    className="article-preview-img"
                                />
                                <div className="image-preview-overlay">
                                    <p className="image-article-summary">{article.summary}</p>
                                </div>
                            </div>
                            <div className="image-article-footer">
                                <div className="read-full-section">
                                    <span className="read-full-text">Read full article at:</span>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="website-link"
                                        title={`Visit ${article.source} website`}
                                    >
                                        <img
                                            src={article.websiteLogo}
                                            alt={`Visit ${article.source}`}
                                            className="website-logo-img"
                                        />
                                        <span className="visit-website-text">Visit {article.source}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Photo Gallery Section --- */}
            <section className="media-section">
                <h2 className="section-title-left">Photo Gallery</h2>
                <div className="photo-gallery-grid">
                    {mediaContent.photoGallery.map((photo) => (
                        <div
                            key={photo.id}
                            className={`
                                newspaper-clipping-card
                                ${photo.type === 'Vertical Photo' ? 'vertical-photo-card' : ''}
                                ${['photo1', 'photo4', 'photo9'].includes(photo.id) ? 'full-width-photo' : ''}
                            `}
                        >
                            <div className="newspaper-clipping-header">
                                <div className="newspaper-clipping-meta">
                                    <h3 className="newspaper-clipping-title">{photo.title}</h3>
                                    <p className="newspaper-clipping-type">{photo.type}</p>
                                </div>
                            </div>
                            <div
                                className="newspaper-clipping-preview"
                                onClick={() => openModal(photo.previewImg, photo.title)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && openModal(photo.previewImg, photo.title)}
                            >
                                <img
                                    src={photo.previewImg}
                                    alt={`Gallery photo: ${photo.title}`}
                                    className="clipping-preview-img"
                                />
                                <div className="clipping-preview-overlay">
                                    <p className="newspaper-clipping-description">{photo.description}</p>
                                </div>
                            </div>
                            <div className="newspaper-clipping-footer">
                                <div className="clipping-info-section">
                                    <span className="clipping-info-text">View Full Image</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Newspaper Clippings Section --- */}
            <section className="media-section">
                <h2 className="section-title-left">Newspaper Clippings</h2>
                <div className="custom-newspaper-clippings-grid">
                    {mediaContent.newspaperClippings.map((clipping) => (
                        <div
                            key={clipping.id}
                            className={`
                                newspaper-clipping-card
                                ${clipping.type.includes('Vertical') ? 'vertical-clipping-card' : ''}
                                ${clipping.type.includes('Horizontal') ? 'horizontal-clipping-card' : ''}
                                ${['NC02', 'NC06'].includes(clipping.id) ? 'full-width-clipping' : ''}
                            `}
                        >
                            <div className="newspaper-clipping-header">
                                <div className="newspaper-clipping-meta">
                                    <h3 className="newspaper-clipping-title">{clipping.title}</h3>
                                    <p className="newspaper-clipping-type">{clipping.type}</p>
                                </div>
                            </div>
                            <div
                                className="newspaper-clipping-preview"
                                onClick={() => openModal(clipping.image, clipping.title)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && openModal(clipping.image, clipping.title)}
                            >
                                <img
                                    src={clipping.image}
                                    alt={`Newspaper clipping: ${clipping.title}`}
                                    className="clipping-preview-img"
                                />
                                <div className="clipping-preview-overlay">
                                    <p className="newspaper-clipping-description">{clipping.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Modal for Newspaper Clipping Image and Photo Gallery Image --- */}
            {isModalOpen && (
                <div
                    className="clipping-modal-overlay"
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="clipping-modal-title"
                >
                    <div className="clipping-modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3 id="clipping-modal-title" className="sr-only">
                            {selectedClippingTitle}
                        </h3>
                        <img
                            src={selectedClippingImage}
                            alt={selectedClippingTitle}
                            className="clipping-modal-image"
                        />
                        <button className="clipping-modal-close-button" onClick={closeModal} aria-label="Close image viewer">
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Media;