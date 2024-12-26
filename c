<<<<<<< HEAD
### Blood Donation Management System: Theoretical Explanation

#### **Home Page Features**
The **Home Page** serves as the primary gateway for all users, featuring:

1. **About Us:** A section that introduces the purpose, vision, and values of the Blood Donation Management System.
2. **Mission:** Highlights the platform's goal of connecting donors with blood banks efficiently.
3. **Why Donate?:** Educates users on the importance and benefits of blood donation.
4. **Uses of Blood Donation:** Provides real-world applications and scenarios where donated blood saves lives.
5. **Testimonials:** Displays positive experiences shared by donors and recipients.
6. **How to Donate Blood:** A guide explaining the steps to become a donor.
7. **Contact Us:** Contact details or a form for inquiries.
8. **Navigation Anchors:**
   - **Donor Registration**
   - **Blood Bank Registration**
   - **Login**

---

#### **Registration and Login Workflow**

1. **Donor and Blood Bank Registration:**
   - Users (donors or blood banks) register via dedicated forms.
   - Post-registration, a **unique user ID** is generated and sent via SMS to their registered mobile number using Twilio.

2. **Login System:**
   - **Donor Login Form**: For donors.
   - **Blood Bank Login Form**: For blood banks.
   - **Admin Login**: Accessible via any login form (donor or blood bank).

---

#### **Donor Dashboard Features**

1. **Personal Details:** Displays donor's profile information.
2. **Blood Request Handling:**
   - **Requests sent to donors** are visible on their dashboard.
   - Upon accepting a request, their details (name, contact, etc.) are sent to the corresponding blood bank.
   - Request status is updated to **fulfilled**.
   - A downloadable **donation certificate** is generated.
3. **Donation Availability Toggle:** Allows donors to mark their availability for donation.
4. **Edit Profile Button:** Enables donors to update their information.
5. **Logout Button:** Logs out of the session.

---

#### **Blood Bank Dashboard Features**

1. **Profile Details:** Displays blood bank details.
2. **Blood Request Form:** 
   - Enables blood banks to send requests by entering the donor’s user ID.
   - On request fulfillment:
     - The **date and time** are saved.
     - Request status is marked as **fulfilled**.
3. **Fulfilled Requests Table:** Shows the list of completed requests.
4. **Edit Profile Button:** Allows the blood bank to update their details.
5. **Logout Button:** Ends the session.

---

#### **Admin Dashboard Features**

1. **Donor Management:**
   - **View Donor Details:** Displays a list of all registered donors.
   - **Edit Donor Details:** Allows updates to donor information.
   - **Remove Donor:** Deletes donor records; a notification is sent via SMS.
2. **Blood Bank Management:**
   - **View Blood Bank List:** Shows all registered blood banks.
   - **Remove Blood Bank:** Deletes blood bank records; a notification is sent via SMS.
3. **Request Management:**
   - **Pending Requests:** Displays all unfulfilled requests with an option to remove them.
   - **Fulfilled Requests:** Displays completed requests with an option to remove them.
4. **Notifications:**
   - SMS notifications are sent for removed donors, blood banks, or requests.

---

#### **SMS Notification Workflow**
1. **Registration Success:** User IDs are sent after successful registration.
2. **Blood Request:** Donors receive SMS notifications for new requests.
3. **Request Fulfillment:** Blood banks and donors are notified of request completion.
4. **Admin Actions:** Notifications for removal of donors, blood banks, or requests.

---

### Advantages of the System

1. **Efficient Matching:** Connects donors with blood banks based on their location and availability.
2. **Real-Time Notifications:** Keeps users updated via SMS.
3. **Role-Specific Dashboards:** Tailored dashboards for donors, blood banks, and admins streamline operations.
4. **Data Management:** Simplified tracking of requests, donations, and users.

Would you like code snippets for any specific features or modules?
=======
apdate query in requested by in bloodrequest component add time 
userDashboards
Apdate query in sending sms only on active members 

>>>>>>> 78e93ecd47d9a274818cbaada3f16e4bb0a2db66















https://diagrammingai.com/client/project/e071af5b-7f98-4eec-8053-026152966489


actors : donar, bloodbank/healthcare provider, admin
donar : registratraion, login, view(profile, bloodrequest, donation history by him, donation certificate), edit profile, password reset
bloodbank : registratraion, login, view(profile, donation certificate), send bloodrequest, edit profile, password reset
admin : manages all 



actors : donar, bloodbank/healthcare provider, admin
donar : registratraion, login, view(profile, bloodrequest, donation history by him, donation certificate), edit profile, password reset
bloodbank : registratraion, login, view(profile, donation certificate), send bloodrequest, edit profile, password reset
admin : manages all  separate the actors    
give the activity daigram for the above
