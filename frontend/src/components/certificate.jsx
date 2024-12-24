import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import html2pdf from "html2pdf.js"; // Import html2pdf
import styles from "../cssModules/certificate.module.css"; // Correctly import the CSS module

const Certificate = () => {
    const location = useLocation();
    const request = location.state?.request; // Get the 'request' data passed via state

    if (!request) {
        return <p>No request data found.</p>;
    }

    const [donorName, setDonorName] = useState(null);

    useEffect(() => {
        if (request) {
            // Fetch the donor's name from the backend using requestFullfilledBy
            axios.post('http://localhost:8081/donarName', {
                requestFullfilledBy: request.requestFullfilledBy,
            })
                .then((response) => {
                    setDonorName(response.data.donorName); // Assuming the backend sends { donorName }
                    //handleDownload();
                })
                .catch((error) => console.error("Error fetching donor details:", error));
        }
    }, [request]);

    const requestId = request.requestFullfilledBy;
    const date = new Date(request.requestFulfilledOn).toLocaleString();
    const city = request.selectedCity;
    const bloodQuantity = request.bloodQuantity + " Units";
    const bloodType = request.requestBlood;
    const hospitalName = request.requestBloodBank;

    // Create a reference to the certificate div
    const certificateRef = useRef();

    // Function to generate and download the PDF
    const handleDownload = () => {
        const options = {
            filename: "certificate-of-appreciation.pdf",
            html2canvas: { scale: 2 }, // Optional: improve PDF resolution
            jsPDF: {
                orientation: "landscape", // Explicitly set landscape orientation
                unit: "mm",
                format: "a4", // Ensure A4 format
                //margin: [20, 20, 20, 20],// Optional: add margins if necessary
            },
        };

        html2pdf()
            .from(certificateRef.current) // Select the content to convert to PDF
            .set(options) // Apply the options
            .save(); // Download the PDF
    };

    const getIndianTime = () => {
        const indianTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
        return indianTime;
    };

    return (
        <>
            <div className={styles.button}><button onClick={handleDownload} className={styles.downloadButton}>
                Download Certificate
            </button></div>
            <div ref={certificateRef} className={styles.mainContainer}>
                {/* <div className={styles.header}>
                    <h1 className={styles.title}>Certificate of Appreciation</h1>
                    <p className={styles.subtitle}>Presented by [Your Organization Name]</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.bloodDrop}>
                        <img
                            src="https://via.placeholder.com/100" // Replace with an actual image URL
                            alt="Blood Drop"
                            className={styles.bloodDropImage}
                        />
                    </div>
                    (Request ID : ) on    . Your selfless act of donating    Units of    blood has helped to meet critical needs and save lives.
                    <p className={styles.bodyText}>
                        This certificate is proudly presented to{" "}
                        <span className={styles.highlight}>{donorName}</span> (Request ID:{" "}
                        <span className={styles.highlight}>{requestId}</span>) on{" "}
                        <span className={styles.highlight}>{date}</span> in the city of{" "}
                        <span className={styles.highlight}>{city}</span>.
                    </p>
                    <p className={styles.bodyText}>
                        Your selfless act of donating{" "}
                        <span className={styles.highlight}>{bloodQuantity}</span> of{" "}
                        <span className={styles.highlight}>{bloodType}</span> blood to{" "}
                        <span className={styles.highlight}>{hospitalName}</span> has helped meet
                        critical needs and save lives.
                    </p>
                    <p className={styles.bodyText}>
                        With heartfelt gratitude, we honor your generosity and commitment to
                        making a difference.
                    </p>
                </div>
                <div className={styles.footer}>
                    <p className={styles.signatureText}>Authorized by:</p>
                    <div className={styles.signatureBox}>
                        <p className={styles.signature}>_____________________________</p>
                        <p className={styles.signatureLabel}>[Authorized Persons Name]</p>
                        <p className={styles.signatureLabel}>[Designation]</p>
                    </div>
                </div> */}
                <div className={styles.container}>
                    <img src="../../public/certificate.jpg" alt="" />
                    <div className={styles.donarName}>
                        <span className={styles.highlight}>{donorName}</span>
                    </div>
                    <div className={styles.bodyText}>
                        Donated on {" "}
                        <span className={styles.highlight}>{date}</span> in the city of{" "}
                        <span className={styles.highlight}>{city}</span>.
                        Your selfless act of donating{" "}
                        <span className={styles.highlight}>{bloodQuantity}</span> of{" "}
                        <span className={styles.highlight}>{bloodType}</span> blood to{" "}
                        <span className={styles.highlight}>{hospitalName}</span> has helped meet
                        critical needs and save lives.
                        <div className={styles.bodyId}>(Request ID:{" "}
                            <span className={styles.highlight}>{requestId}</span>)
                        </div>
                    </div>
                </div>
                <div className={styles.date}>
                    <span className={styles.highlight}>{getIndianTime()}</span>
                    <span><u>Date</u></span>
                </div>
                <div className={styles.certifiedBy}>
                    <div className={styles.highlight}>{hospitalName}</div>
                    <div><u>Certified By</u></div>
                </div>
            </div>

        </>
    );
};

export default Certificate;
