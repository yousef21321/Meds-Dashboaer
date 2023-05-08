-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2023 at 11:08 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meds_dashboard7`
--

-- --------------------------------------------------------

--
-- Table structure for table `categoryes`
--

CREATE TABLE `categoryes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categoryes`
--

INSERT INTO `categoryes` (`id`, `name`, `description`, `image_url`) VALUES
(7, 'Blood Pressure', 'Medications for high blood pressure and heart conditions are used to treat high blood pressure and various heart diseases that affect the function of the heart. These medications help lower blood pressure, improve blood flow in arteries and veins, reduce the burden on the heart, and decrease the risk of developing heart disease. Examples of these medications include ACE inhibitors, ARBs, calcium channel blockers, beta-blockers, and others. It is important to consult a specialist doctor before using any of these medications, as they may have potential side effects such as dizziness, headache, and nausea.\n\n\n\n', 'Blood Pressure.webp'),
(8, 'Bones', 'Bone medications refers to a group of drugs used to treat many conditions related to the skeletal and muscular systems, which may be caused by chronic diseases or injuries. These medications include, but are not limited to, pain relievers, non-steroidal anti-inflammatory drugs (NSAIDs), anticoagulants, cholesterol-lowering drugs, calcium and vitamin D supplements, and various hormone therapies such as growth hormone, estrogen, and testosterone. Bone medications can be taken orally, injected or applied topically, and it is important to consult a specialist doctor before using them', 'Bones.webp'),
(9, 'Pinkillers', 'Painkillers used to relieve various types of pain, whether mild or severe, which may be caused by injury, inflammation, or a chronic condition. Painkillers work by temporarily inhibiting the pain signals that nerves send to the brain, and can be used to alleviate pain for a short period of time, but they do not treat the underlying condition that caused the pain', 'Pinkillers.webp'),
(10, 'Pediatric medications', 'Pediatric medications are used to treat various diseases and health conditions that affect children. These medications can differ based on the appropriate age for their use, dosages according to a child\'s weight and age, and the available forms of medication such as liquids, tablets, and capsules depending on the child\'s age and health condition. Examples of pediatric medications include pain relievers, antihistamines, anti-inflammatory drugs, antacids, and others. It is important to consult a specialist doctor before taking any type of medication for children', 'Pediatric medications.webp'),
(11, 'Diabetes medications', 'Diabetes medications are used to treat diabetes, a condition in which there is an increase in the level of sugar in the blood. The different types of these medications vary in terms of their mode of action and mechanism of effect, including insulin, ACE inhibitors, ARBs, alpha-glucosidase inhibitors, glucose reabsorption inhibitors, and others. These medications help lower blood sugar levels and improve the body\'s use of insulin, which helps improve pancreatic function and prevent diabetes complications. Some possible side effects of these medications include dizziness, headache, nausea, muscle cramps, and others, so it is important to consult a specialist doctor before taking any type of diabetes medication.', 'Diabetes medications.webp'),
(12, 'Psychiatric medications', 'Psychiatric medications are used to treat mental health problems that affect the mind and behavior, and are used in a variety of mental health disorders such as depression, anxiety, schizophrenia, bipolar disorder, panic disorders, and others. These medications include antidepressants, anti-anxiety medications, antipsychotics, serotonin reuptake inhibitors, monoamine oxidase inhibitors, and others. These medications are carefully administered according to specific dosages and under the supervision of specialist doctors in mental health. These medications may have possible side effects such as dizziness, drowsiness, headache, loss of appetite and weight gain or loss, among others, so it is important to inform the treating physician of any changes in the patient\'s condition.', 'Psychiatric medications.webp'),
(13, 'Chest medications', 'Medications for respiratory and chest conditions', 'Chest medications.webp'),
(14, 'Gastrointestinal medications', 'Medications for the digestive system', 'Gastrointestinal medications.webp'),
(15, 'Ophthalmic medications', 'Eye medications include several different types, such as Eye numbing drops that are used to anesthetize the eye before surgical procedures or some medical tests.Nonsteroidal anti-inflammatory drugs (NSAIDs) that are used to relieve pain and inflammation in the eye due to conditions such as iritis and conjunctivitis.Antihistamines that are used to treat allergic conjunctivitis and reduce itching and swelling.Anti-coagulant drops that are used to prevent clotting inside the eye and treat conditions like retinal vein occlusion.Antibiotics that are used to treat bacterial and viral infections in the eye, such as bacterial conjunctivitis.', 'Ophthalmic medications.webp'),
(16, 'Skin Medications', 'Skin medications are drugs used to treat various skin conditions. These medications come in many forms, such as creams, ointments, gels, lotions, foams, sprays, and shampoos. The type of medication prescribed depends on the specific skin condition being treated, as well as the severity of the condition.Different types of skin medications work in different ways. Some medications help reduce inflammation, while others target bacteria, viruses, or fungi that cause skin infections. Some medications work by slowing down skin cell growth, while others help moisturize dry, itchy, or irritated skin.It is important to use skin medications as directed by a doctor or pharmacist. Some medications may have side effects or interact with other medications, so it is important to talk to a healthcare provider before starting any new treatment', 'Skin Medications.webp'),
(20, 'hoSTOLGY2', '8888', '');

-- --------------------------------------------------------

--
-- Table structure for table `medicines`
--

CREATE TABLE `medicines` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` int(50) NOT NULL,
  `expirationDate` varchar(255) DEFAULT NULL,
  `category_id` int(50) DEFAULT NULL,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicines`
--

INSERT INTO `medicines` (`id`, `name`, `description`, `price`, `expirationDate`, `category_id`, `image_url`) VALUES
(17, 'Adancor', 'Adancor Is A Medication That Contains The Active Ingredient Mibefradil, Which Belongs To The Calcium Channel Blocker Class Of Drugs. This Medication Is Used To Treat High Blood Pressure (Essential Hypertension) By Dilating Blood Vessels And Lowering Blood Pressure.Adancor Is An Effective Medication For Lowering Blood Pressure, And The Dosage And Duration Of Treatment Are Determined Based On The Patient\'s Condition And Response To Treatment. It Is Important To Consult A Doctor Before Taking This Medication And Not To Take It In Any Dose Or Combination That Has Not Been Prescribed By A Doctor. Additionally, Some Conditions Such As Pregnancy, Breastfeeding, And Certain Medical Conditions May Make This Medication Unsuitable, So It Is Important To Speak With A Doctor About Any Concerns.	', 88, '2027-10-12', 7, ''),
(18, 'Co-Tareg', 'Co-Tareg is a medication used to treat high blood pressure. It contains a combination of the following active ingredients: hydrochlorothiazide and valsartan. Valsartan works by widening blood vessels, while hydrochlorothiazide works by reducing the amount of salt and water in the body, which leads to lower blood pressure.Co-Tareg is taken orally, once a day, before or after food. The dosage of the medication is determined based on the patient\'s condition and their response to the treatment. It is important not to exceed the recommended dose, or stop taking the medication without consulting the treating physician', 168, '12/9/2024', 7, '7oObPYafdh9tY1lZKjWQjYjL0zgovwtCy5sKcxiK1.webp'),
(19, 'Concor Core 10 mg', 'Concor Core 10 mg is a medication that contains the active ingredient \"bisoprolol\" and is used to treat high blood pressure and heart disease. The medication works by reducing the speed of the heart rate and the force of its beats, which helps to improve blood flow in the body and reduce pressure on the arteries. It may also be used to treat some cases of migraine headaches and improve metabolic function in the body. It is important to consult a doctor before using this medication and to follow all instructions carefully.', 57, '12/6/2024', 7, '7oObPYafdh9tY1lZKjWQjYjL0zgovwtCy5sKcxiK5.webp'),
(20, 'Concor Core 5 mg', 'Concor Core 5 mg is a medication that contains the active ingredient \"bisoprolol\" and is used to treat high blood pressure and heart disease. The medication works by reducing the speed of the heart rate and the force of its beats, which helps to improve blood flow in the body and reduce pressure on the arteries. It may also be used to treat some cases of migraine headaches and improve metabolic function in the body. It is important to consult a doctor before using this medication and to follow all instructions carefully.', 41, '12/1/2024', 7, '7oObPYafdh9tY1lZKjWQjYjL0zgovwtCy5sKcxiK6.webp'),
(22, 'Concor Core 2.5 mg', 'Concor Cor 2.5 mg is a medication that contains the active ingredient \"bisoprolol\" and is used to treat high blood pressure and heart disease. The medication works by reducing the speed of the heart rate and the force of its beats, which helps to improve blood flow in the body and reduce pressure on the arteries. It may also be used to treat some cases of migraine headaches and improve metabolic function in the body. It is important to consult a doctor before using this medication and to follow all instructions carefully. This medication is part of a comprehensive treatment plan that includes lifestyle changes such as proper nutrition and regular physical activity. It is important to avoid stopping the medication suddenly and to decrease the dose gradually under the supervision of a doctor.', 33, '12/1/2024', 7, '7oObPYafdh9tY1lZKjWQjYjL0zgovwtCy5sKcxiK7.webp'),
(26, 'Exforge 160', 'Exforge 160 is a medication used to treat high blood pressure (hypertension). The medication contains two active ingredients: valsartan and amlodipine.Valsartan belongs to a class of drugs known as angiotensin II receptor blockers, and it works by widening blood vessels and improving blood flow by blocking the action of a compound that narrows blood vessels. Amlodipine belongs to a class of drugs known as calcium channel blockers, and it works by widening blood vessels and improving blood flow.It is important to consult a doctor before taking Exforge 160 and to follow the prescribed dosage according to the instructions provided by the doctor or pharmacist. The medication can cause side effects such as headaches, dizziness, swelling in the limbs, and joint pain, so driving or performing any task that requires concentration should be avoided until the individual knows how the medication affects them.', 114, '1/11/2024', 7, 'images.webp'),
(27, 'Tareg 80', 'Tareg is an angiotensin receptor blocker medication that is used to treat high blood pressure and heart-related conditions. The medication contains the active ingredient \"valsartan\", which works by blocking the contraction of blood vessels, thereby reducing blood pressure. Additionally, the medication is also used to improve heart function following a heart attack. It is important to consult with the treating physician before using this medication, and to carefully follow the instructions provided with the medication. Common side effects of the medication include headache, dizziness, diarrhea, and fatigue.', 168, '1/11/2025', 7, 'download.webp'),
(28, 'Quibron 300', 'Quibron 300 is a medication that contains the active ingredient Theophylline at a concentration of 300 mg. It is used to treat chronic respiratory diseases such as asthma, chronic obstructive pulmonary disease (COPD), and hypoxemia (low oxygen levels in the blood). It helps alleviate symptoms associated with these conditions, such as difficulty breathing, coughing, and inflammation of the airways. The medication works by widening the airways and increasing airflow to the lungs, as well as stimulating the respiratory system to work better and protect the lungs from damage caused by respiratory diseases. It is important to consult a doctor before using this medication, as the dosage and treatment period are determined based on the patient\'s medical history and condition.\n', 14, '1/11/2026', 13, '222.webp'),
(29, 'Uniphyllin 300', 'Uniphyllin 300 is a medication that contains the active ingredient Theophylline at a concentration of 300 mg. It belongs to a class of drugs called bronchodilators and is used to treat respiratory diseases such as asthma, chronic obstructive pulmonary disease (COPD), and hypoxemia (low oxygen levels in the blood). The medication works by relaxing the muscles around the airways, making it easier to breathe. It also improves lung function by increasing the amount of air that can flow into and out of the lungs.Uniphyllin 300 should only be taken under the direction of a doctor, who will determine the appropriate dosage and duration of treatment based on the patient\'s medical history and condition. It is important to follow the doctor\'s instructions carefully when taking this medication, as overdose or improper use of Uniphyllin 300 can lead to serious side effects such as nausea, vomiting, seizures, and irregular heartbeat.', 30, '1/10/2026', 13, 'imgresss.webp'),
(30, 'Avamys', 'Avamys is a nasal spray containing the active ingredient Fluticasone Furoate. It is used to treat allergy symptoms such as runny nose, congestion, itching, and sneezing. The medication works by reducing swelling in the nasal membranes and decreasing the production of mucus. Avamys is also considered an anti-inflammatory medication and works to reduce inflammation in the nasal passages. The drug is used at specified doses and under the supervision of a doctor, who will determine the appropriate dose based on the patient\'s medical history and condition. It is important to follow the doctor\'s instructions and not increase or decrease the dosage without consulting them.', 80, '20/1/2026', 13, 'Avamy.webp'),
(31, 'Nasonex', 'Nasonex is a brand name for the drug mometasone furoate, which is a nasal spray used to treat seasonal or year-round allergies. It works by reducing inflammation in the nasal passages and can provide relief from symptoms such as congestion, runny nose, sneezing, and itching. Nasonex is available only with a prescription and should be used exactly as directed by your healthcare provider. It may take several days of regular use to see the full benefits of the medication. As with any medication, there are potential side effects associated with Nasonex, so it\'s important to discuss any concerns with your doctor.', 48, '22/2/2025', 13, 'Nasonex.webp'),
(32, 'Epicophylline', 'Epicophylline is a medication that contains two active ingredients: theophylline and ethylenediamine. Theophylline belongs to a class of drugs called methylxanthines, which are used to treat respiratory conditions such as asthma and chronic obstructive pulmonary disease (COPD). It works by relaxing the muscles in the airways, making it easier to breathe. Ethylenediamine is added to theophylline to improve its solubility and absorption in the body.Epicophylline is available in tablet form and is usually taken two or three times a day, with or without food. It\'s important to take the medication exactly as directed by your doctor, as overdose can cause serious side effects. Common side effects of epicophylline include nausea, vomiting, headache, insomnia, and palpitations. If you experience any severe or persistent side effects while taking this medication, be sure to contact your healthcare provider right away.', 8, '2/2/2024', 13, 'Epicophylline.webp'),
(33, 'Singulair', 'Singulair (montelukast) is a medication used to prevent and manage symptoms of asthma, as well as to relieve symptoms of seasonal allergies. It works by blocking the action of leukotrienes, which are inflammatory chemicals in the body that can cause narrowing and swelling of airways in the lungs, leading to symptoms such as wheezing, shortness of breath, chest tightness, and coughing.Singulair is available in tablet form and is usually taken once a day in the evening. It\'s important to take the medication exactly as directed by your doctor, even if you\'re feeling better. Common side effects of Singulair include headache, stomach pain, diarrhea, and fatigue. In rare cases, it may also cause severe allergic reactions or mood changes. If you experience any unusual or concerning symptoms while taking this medication, be sure to contact your healthcare provider right away', 115, '2/3/2024', 13, 'Singulair.webp'),
(34, 'Alvent', 'Alvent is a medication used to relieve cough and remove phlegm. It contains the active ingredient guaifenesin, which works by promoting the secretion and facilitating the removal of phlegm, thereby making breathing easier and relieving cough.Common side effects of Alvent include headache, nausea, vomiting, diarrhea, skin rash, itching, high blood pressure, and digestive disturbances. Please consult your doctor before using any medication.', 11, '2/3/2024', 13, 'Alvent.webp'),
(35, 'Activent SR', 'Activent SR is a brand name of medication that contains the active ingredient salbutamol sulfate. It is used to treat bronchospasm associated with asthma, chronic bronchitis, emphysema, and other lung conditions.Salbutamol works by relaxing the muscles in the airways, which helps to open up the air passages and make it easier to breathe. Activent SR is typically taken by inhalation through a nebulizer or metered-dose inhaler.Common side effects of Activent SR include tremors, nervousness, headache, rapid heart rate, palpitations, muscle cramps, and dry mouth. If you experience any severe or persistent side effects, or if you have any concerns about taking this medication, please consult your doctor.', 13, '2/3/2024', 13, 'Activent SR.webp'),
(36, 'Adol', 'Adol is a brand name for a group of pain relievers that contain the active ingredient ibuprofen. It is commonly used to treat mild to moderate pain, such as headaches, toothaches, menstrual cramps, and muscle aches. Adol works by reducing inflammation and blocking the production of certain chemicals in the body that cause pain and fever. However, it\'s important to note that Adol should only be taken as directed and under the guidance of a healthcare provider, as it can have side effects and interactions with other medications.', 14, '2/3/2024', 9, 'Adol.webp'),
(37, 'Adwiflam 50 ER', 'Adwiflam 50ER is a brand name for a medication called diclofenac sodium. It belongs to a group of medicines known as non-steroidal anti-inflammatory drugs (NSAIDs) and is used to relieve pain and reduce inflammation in conditions such as osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, and menstrual cramps. Adwiflam 50ER is an extended-release tablet that is designed to release the medication slowly over time, providing long-lasting relief from pain and inflammation. However, it\'s important to only take Adwiflam 50ER as directed by a healthcare provider, as it can have side effects and interactions with other medications.', 16, '2/3/2024', 9, 'Adwiflam 50 ER.webp'),
(38, 'Brufen', 'Brufen is a brand name for the medication ibuprofen, which belongs to a group of medicines known as nonsteroidal anti-inflammatory drugs (NSAIDs). It is commonly used to relieve mild to moderate pain, such as headaches, menstrual cramps, dental pain, and muscle aches. Brufen also helps reduce inflammation and fever. It works by blocking the production of certain chemicals in the body that cause pain and inflammation.Brufen is available in many forms, including tablets, capsules, suspensions, and syrups. However, it\'s important to only take Brufen as directed by a healthcare provider, as it can have side effects and interactions with other medications. Also, long-term or excessive use of NSAIDs like Brufen can increase the risk of certain side effects, such as stomach ulcers, bleeding, and kidney problems', 30, '2/3/2024', 9, 'Brufen.webp'),
(39, 'Ketofan 50', 'Ketofan 50 is a brand name for the medication ketoprofen, which is a non-steroidal anti-inflammatory drug (NSAID). It is used to relieve pain and reduce inflammation in conditions such as rheumatoid arthritis, osteoarthritis, menstrual cramps, dental pain, and musculoskeletal injuries. Ketofan 50 works by blocking the production of certain chemicals in the body that cause pain and inflammation.Ketofan 50 is available in different forms, including tablets, capsules, gels, creams, and patches. However, it\'s important to only take or use Ketofan 50 as directed by a healthcare provider, as it can have side effects and interactions with other medications. Also, long-term or excessive use of NSAIDs like Ketofan 50 can increase the risk of certain side effects, such as stomach ulcers, bleeding, and kidney problems.', 14, '2/3/2024', 9, 'Ketofan 50.webp'),
(40, 'Ketolac', 'Ketolac is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve short-term moderate to severe pain, such as pain after surgery or injury. It works by blocking the production of certain chemicals in the body that cause pain and inflammation.Ketolac is usually given as an injection, but it can also be taken orally in tablet form. However, it\'s important to only take Ketolac under the guidance of a healthcare provider, as it can have side effects and interactions with other medications. Also, long-term use of NSAIDs like Ketolac can increase the risk of certain side effects, such as stomach ulcers, bleeding, and kidney problems', 18, '2/3/2024', 9, 'Ketolac.webp'),
(41, 'Norflex', 'Norflex is a brand name for the medication orphenadrine, which is a muscle relaxant that works by blocking certain nerve impulses in the brain and spinal cord. It is used to treat muscle spasms or stiffness associated with conditions such as multiple sclerosis, cerebral palsy, and other neurological disorders.Norflex is available in tablet form and should only be taken as directed by a healthcare provider, as it can have side effects and interact with other medications. Common side effects of Norflex include dry mouth, dizziness, blurred vision, constipation, and difficulty urinating. In rare cases, more serious side effects such as an allergic reaction or liver problems may occur, so it\'s important to seek prompt medical attention if you experience any unusual symptoms while taking Norflex', 6, '2/3/2024', 9, 'Norflex.webp'),
(42, 'Panadol Extra', 'Panadol Extra is a brand name for a combination medication that contains two active ingredients: paracetamol and caffeine. Paracetamol is a pain reliever and fever reducer, while caffeine is a mild stimulant that can help enhance the analgesic effects of paracetamol.Panadol Extra is commonly used to relieve mild to moderate pain, such as headache, toothache, menstrual cramps, and muscle aches. It can also be used to reduce fever. Panadol Extra is available in tablet form and should only be taken as directed by a healthcare provider, as it can have side effects and interact with other medications.It\'s important to note that excessive use or long-term use of Panadol Extra can be harmful and increase the risk of liver damage. If you experience persistent or severe pain, it\'s best to seek medical attention to determine the underlying cause and appropriate treatment.', 35, '2/3/2024', 9, 'Panadol Extra.webp'),
(45, 'Panadol', 'Panado is a brand name for the medication paracetamol, also known as acetaminophen. It is a popular over-the-counter pain reliever and fever reducer that is commonly used to treat mild to moderate pain such as toothaches, headaches, menstrual cramps, and muscle aches.Paracetamol works by blocking the production of certain chemicals in the body that cause pain and fever. It is available in various forms, including tablets, capsules, liquid suspensions, and suppositories.However, it\'s important to only take Panado or other paracetamol products as directed by a healthcare provider or as labeled on the packaging, as excessive use or misuse can cause serious side effects and even liver damage. It\'s also important to be aware of potential interactions with other medications you may be taking. If you have any concerns about taking Panado or other medications, always consult with your healthcare provider first.', 22, '2/3/2024', 9, '7oObPYafdh9tY1lZKjWQjYjL0zgovwtCy5sKcxiK.webp'),
(46, 'Controloc 20mg', 'Controloc 20mg is a brand name for the medication pantoprazole, which is a proton pump inhibitor (PPI) used to reduce stomach acid production. It is commonly prescribed to treat gastroesophageal reflux disease (GERD), peptic ulcer disease, and other conditions that involve excessive stomach acid production.Controloc 20mg works by blocking the enzyme in the stomach that produces acid. It can be taken orally as a tablet or given intravenously as an injection. However, it\'s important to only take Controloc 20mg as directed by a healthcare provider, as it can have side effects and interact with other medications.Common side effects of Controloc 20mg include headache, diarrhea, nausea, abdominal pain, and flatulence. In rare cases, more serious side effects such as liver problems, kidney problems, or allergic reactions may occur. If you experience any unusual symptoms while taking Controloc 20mg, it\'s important to seek medical attention right away', 80, '2/3/2024', 14, 'Controloc 20mg.webp'),
(47, 'Digest Eze', 'Digest Eze is a brand name for a dietary supplement that contains a blend of enzymes and other natural ingredients designed to support digestion. The enzymes in Digest Eze are derived from plant sources and help break down carbohydrates, proteins, and fats in the digestive system, making it easier for the body to absorb nutrients and reducing symptoms such as bloating, gas, and indigestion.Other ingredients in Digest Eze may include ginger root extract, chamomile flower extract, peppermint leaf extract, and fennel seed extract, which have been traditionally used to support digestive health.However, it\'s important to note that while Digest Eze and other digestive enzyme supplements may be helpful for some people with digestive issues, they are not intended to replace a healthy diet or lifestyle habits. Also, if you have any underlying medical conditions or are taking any medications, including over-the-counter supplements, it\'s always best to consult with your healthcare provider before starting a new supplement regimen.', 20, '2/3/2024', 14, 'Digest Eze.webp'),
(48, 'Digestin', 'Digestin is a brand name for a dietary supplement that contains a blend of enzymes and other natural ingredients designed to support digestion. The enzymes in Digest Eze are derived from plant sources and help break down carbohydrates, proteins, and fats in the digestive system, making it easier for the body to absorb nutrients and reducing symptoms such as bloating, gas, and indigestion.Other ingredients in Digest Eze may include ginger root extract, chamomile flower extract, peppermint leaf extract, and fennel seed extract, which have been traditionally used to support digestive health.However, it\'s important to note that while Digest Eze and other digestive enzyme supplements may be helpful for some people with digestive issues, they are not intended to replace a healthy diet or lifestyle habits. Also, if you have any underlying medical conditions or are taking any medications, including over-the-counter supplements, it\'s always best to consult with your healthcare provider before starting a new supplement regimen.', 15, '2/3/2024', 14, 'Digestin.webp'),
(49, 'Flagyl 250', 'Flagyl 250 is a brand name for the medication metronidazole, which is an antibiotic that is used to treat various bacterial and parasitic infections. Flagyl works by inhibiting the growth and replication of bacteria and other microorganisms.Flagyl 250 is typically prescribed to treat bacterial infections in the gastrointestinal tract, such as diarrhea caused by the parasite Giardia lamblia. It can also be used to treat infections in other parts of the body, including the skin, vagina, and respiratory tract.It\'s important to take Flagyl 250 exactly as directed by a healthcare provider and to complete the full course of treatment, even if symptoms improve before the medication is finished. Skipping doses or stopping treatment too early can lead to antibiotic resistance and increase the risk of recurrent infections.Common side effects of Flagyl 250 may include nausea, vomiting, diarrhea, headache, and metallic taste in the mouth. In rare cases, more serious side effects such as allergic reactions or neurological symptoms may occur, so it\'s important to seek medical attention if you experience any unusual symptoms while taking Flagyl 250', 13, '2/3/2024', 14, 'Flagyl 250.webp'),
(50, 'Gaviscon', 'Gaviscon is a brand name for a medication that contains a combination of aluminum hydroxide and magnesium carbonate. It belongs to a group of medications known as antacids, which work by neutralizing stomach acid.Gaviscon is used to treat symptoms of gastroesophageal reflux disease (GERD), such as heartburn, acid reflux, and indigestion. It forms a protective barrier on top of the stomach contents, preventing them from flowing back up into the esophagus and causing irritation.Gaviscon is available in different forms, including tablets, liquid suspensions, and chewable tablets. However, it\'s important to only take Gaviscon or any other antacid medication as directed by a healthcare provider, as excessive use or misuse can cause serious side effects and interact with other medications.Common side effects of Gaviscon may include constipation, diarrhea, and stomach cramps. In rare cases, more serious side effects such as allergic reactions or kidney problems may occur, so it\'s important to seek medical attention if you experience any unusual symptoms while taking Gaviscon.', 45, '2/3/2024', 14, 'Gaviscon.webp'),
(51, 'Moxal Plus', 'Moxal Plus is a brand name for a combination medication that contains amoxicillin and clavulanic acid. It is an antibiotic medication used to treat various bacterial infections such as respiratory tract infections, urinary tract infections, skin and soft tissue infections, and dental infections.Amoxicillin is a penicillin-type antibiotic that works by stopping the growth of bacteria, while clavulanic acid helps prevent certain bacteria from becoming resistant to amoxicillin. The combination of these two medications makes Moxal Plus more effective against a wider range of bacterial infections.Moxal Plus is available in tablet form and should only be taken as directed by a healthcare provider, as it can have side effects and interact with other medications. Common side effects may include diarrhea, nausea, vomiting, stomach pain, and skin rash. In rare cases, more serious side effects may occur, such as allergic reactions or liver problems. If you experience any unusual symptoms while taking Moxal Plus, it\'s important to seek medical attention right away', 45, '2/3/2024', 14, 'Moxal Plus.webp'),
(52, 'Pantozol 40mg', 'Pantozol 40mg is a brand name for the medication Pantoprazole, which belongs to a class of medications known as proton pump inhibitors (PPIs). It works by reducing the amount of acid produced in the stomach, which can help relieve symptoms of gastroesophageal reflux disease (GERD), peptic ulcer disease, and other conditions that involve excessive stomach acid production.Pantozol 40mg is typically prescribed to treat GERD and other acid-related conditions such as Zollinger-Ellison syndrome. It is available in tablet form and should only be taken as directed by a healthcare provider, as it can have side effects and interact with other medications.Common side effects of Pantozol 40mg may include headache, diarrhea, nausea, abdominal pain, and flatulence. In rare cases, more serious side effects such as liver problems or allergic reactions may occur, so it\'s important to seek medical attention if you experience any unusual symptoms while taking Pantozol 40mg.', 90, '2/3/2024', 14, 'Pantozol 40mg.webp'),
(53, 'Spasmomen', 'Spasmomen is a brand name for the medication alverine citrate, which is a smooth muscle relaxant used to treat symptoms of irritable bowel syndrome (IBS). It works by blocking certain nerve impulses in the gut, reducing muscle contractions and spasms that can cause pain, bloating, and diarrhea or constipation.Spasmomen is available in tablet form and should only be taken as directed by a healthcare provider. Common side effects of Spasmomen may include headache, dizziness, nausea, dry mouth, and changes in appetite or sleep patterns.However, it\'s important to note that while Spasmomen and other smooth muscle relaxants may be helpful for some people with IBS, they are not intended to replace a healthy diet or lifestyle habits. Also, if you have any underlying medical conditions or are taking any medications, including over-the-counter supplements, it\'s always best to consult with your healthcare provider before starting a new treatment regimen', 32, '2/3/2024', 14, 'Spasmomen.webp'),
(54, 'Brufen', 'Brufen is a brand name for the drug Ibuprofen, which is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce fever, and decrease inflammation. It works by blocking the production of certain chemicals in the body that cause pain and inflammation. Brufen/Ibuprofen can be taken orally or applied topically, and is available over-the-counter in many countries. However, it is important to follow the recommendations of a healthcare professional or the instructions on the medication packaging when taking Brufen/Ibuprofen, as improper use may lead to side effects or complications', 21, '2/3/2024', 10, 'Brufen.webp'),
(55, 'Dentinox', 'Dentinox is a brand of baby care products that specializes in treating and preventing teething-related symptoms. Their products include teething gels, toothpastes, and toothbrushes for babies and young children.One of their most popular products is Dentinox Teething Gel, which contains the active ingredient lidocaine hydrochloride to help reduce pain and discomfort caused by teething. It can be applied directly to the gums using a clean finger or cotton swab.It\'s important to note that while Dentinox products are generally safe for use on babies and young children, it\'s still recommended to consult with a healthcare professional before using any new medication or product on your child. Additionally, it\'s important to follow the instructions carefully and never exceed the recommended dosage or frequency of use.', 37, '2/3/2024', 10, 'Dentinox.webp'),
(56, 'Otrivin', 'Otrivin is a brand name for the nasal decongestant medication, xylometazoline. It is used to provide temporary relief from congestion or stuffiness in the nose caused by allergies, colds, or sinusitis.Otrivin works by constricting blood vessels in the nasal passages, which helps to reduce inflammation and open up the airways. It is available in various forms, such as nasal sprays, drops, and gels.However, it\'s important to follow the instructions provided by a healthcare professional or the manufacturer when using Otrivin, as overuse or improper use may lead to side effects such as dryness, irritation, and rebound congestion. Additionally, Otrivin should not be used for more than a few days at a time without consulting a healthcare professional, as prolonged use may cause dependency or worsen existing conditions such as high blood pressure', 10, '2/3/2024', 10, 'Otrivin.webp'),
(57, 'Simedill', 'SimeDil is a combination medication that contains two active ingredients: celecoxib and simethicone. It is used to treat certain health conditions in children such as stomach and intestinal pain, abdominal cramps, and gas.Celecoxib is a type of anti-inflammatory medication that works by reducing pain, swelling, and inflammation. Simethicone acts as an antifoaming agent to help eliminate gas from the digestive system.However, it\'s important to consult with a healthcare professional before using this medication and to avoid taking more than the recommended dose, as excessive doses can lead to some side effects such as gastrointestinal disturbances, drowsiness, and headache', 25, '2/3/2024', 10, 'Simedill.webp'),
(58, 'Simenthicone', 'Simethicone is an anti-foaming agent that is commonly used as an over-the-counter medication to relieve symptoms of gas and bloating. It works by breaking down bubbles of gas in the digestive tract, which makes it easier for the gas to be expelled.Simethicone is available in various forms, including liquids, capsules, and chewable tablets. It can be taken before or after meals, as needed. While simethicone is generally considered safe for most people, it\'s still important to follow the instructions on the packaging or provided by a healthcare professional when using this medication. Additionally, if you experience persistent or severe digestive symptoms, it\'s important to consult with a healthcare professional to rule out any underlying health conditions', 8, '2/3/2024', 10, 'Simenthicone.webp'),
(59, 'Tobrin 5ml', 'Tobrin 5 ml is an ophthalmic solution that contains the active ingredient Tobramycin. It is a type of antibiotic medication that is used to treat bacterial eye infections such as conjunctivitis, keratitis, and blepharitis.Tobramycin works by inhibiting the growth of bacteria in the eye, which helps to reduce inflammation and clear up the infection. Tobrin 5 ml is usually applied directly into the affected eye(s) several times a day, as directed by a healthcare professional.It\'s important to follow the recommendations of a healthcare professional or the instructions on the medication packaging when using Tobrin 5 ml, as improper use or overuse may lead to side effects or complications. Additionally, it\'s important to complete the full course of treatment even if symptoms improve, in order to ensure that the infection is fully eradicated.', 40, '2/3/2024', 10, 'Tobrin 5ml.webp'),
(60, 'Vidrop', 'Vidrop is a brand name for a medication that contains the active ingredient Fluorometholone, which is used to treat various eye inflammations in children such as conjunctivitis, keratitis, and other related conditions.Fluorometholone works by inhibiting the local immune response, which leads to a reduction in inflammation, redness, swelling, and itching.Vidrop is typically administered as eye drops, and it\'s important to consult with a healthcare professional before using this medication. It is also important to follow the instructions carefully to avoid any potential side effects or adverse reactions.', 14, '2/3/2024', 10, 'Vidrop.webp'),
(61, 'Agout 40mg', 'Agout is a brand name for a medication that contains the active ingredient Zoledronic acid. It is used to treat certain bone-related conditions such as osteoporosis and bone cancer.Zoledronic acid works by inhibiting the extraction of minerals from bones and can reduce the risk of fractures and improve bone density.Agout is typically administered intravenously, and it\'s important to consult with a healthcare professional before using this medication. It is also important to follow the instructions carefully to avoid any potential side effects such as nausea, diarrhea, and headache.', 106, '2/3/2024', 8, 'Agout 40mg.webp'),
(62, 'Aroxicam 15', 'Etodolac is a nonsteroidal anti-inflammatory drug (NSAID) that is commonly used to treat bone and joint-related pain and inflammation, such as rheumatoid arthritis, gouty arthritis, psoriatic arthritis, and other conditions.Etodolac works by inhibiting the enzymes responsible for producing prostaglandins, which are chemicals in the body that cause pain, swelling, and bone inflammation.Etodolac is usually available in tablet form, and it\'s important to consult with a healthcare professional before using this medication. It\'s also important to avoid taking more than the recommended dosage and to carefully follow the instructions provided to avoid any potential side effects', 106, '2/3/2024', 8, 'Aroxicam 15.webp'),
(63, 'Diclac 150 ID', 'Diclac 150 ID is a medication that contains the active ingredient Diclofenac sodium. It belongs to the class of nonsteroidal anti-inflammatory drugs (NSAIDs) and is commonly used to relieve pain, inflammation, and swelling associated with various conditions such as osteoarthritis, rheumatoid arthritis, menstrual cramps, and other musculoskeletal disorders.Diclofenac works by inhibiting the production of prostaglandins, which are chemicals in the body that cause pain, fever, and inflammation.Diclac 150 ID is an extended-release tablet that is designed to release the medication slowly over time, providing sustained relief for up to 24 hours. However, it\'s important to follow the recommendations of a healthcare professional or the instructions on the medication packaging when taking Diclac 150 ID, as improper use may lead to side effects or complications. Some common side effects of Diclofenac include gastrointestinal disturbances, dizziness, and headache', 105, '2/3/2024', 8, 'Diclac 150 ID.webp'),
(64, 'Dorofen', 'Dorofen is a brand name for a medication that contains the active ingredient Naproxen. It is used to treat bone and joint-related pain and inflammation, such as rheumatoid arthritis, gouty arthritis, psoriatic arthritis, and other conditions.Naproxen works by inhibiting the enzymes responsible for producing prostaglandins, which are chemicals in the body that cause pain, swelling, and inflammation in the bones.Dorofen is typically available in tablet form, and it\'s important to consult with a healthcare professional before using this medication. It\'s also important to avoid taking more than the recommended dosage and to carefully follow the instructions provided to avoid any potential side effects', 82, '2/3/2024', 8, 'Dorofen.webp'),
(65, 'Gaptin 100mg', 'Gaptin 100mg is a brand name for the medication Gabapentin. It is an anticonvulsant drug that is also used to treat certain types of chronic pain such as neuropathic pain, which is caused by damage to the nerves.Gabapentin works by reducing abnormal activity in the brain and nervous system, which helps to decrease pain and prevent seizures. It is commonly used to manage various conditions including epilepsy, restless leg syndrome, and postherpetic neuralgia.Gaptin 100mg is usually available in tablet form, and it\'s important to consult with a healthcare professional before using this medication. It\'s also important to follow the instructions carefully, especially if you are taking other medications or have a history of liver or kidney disease, to avoid any potential side effects or interactions. Some common side effects of Gabapentin include dizziness, drowsiness, and nausea', 66, '2/3/2024', 8, 'Gaptin 100mg.webp'),
(66, 'Goutex 80mg', 'Goutex 80mg is a brand name for the medication Febuxostat. It is used to treat high levels of uric acid in the blood, which can lead to gout, a type of arthritis that causes severe pain and swelling in the joints.Febuxostat works by inhibiting the enzyme responsible for producing uric acid, which helps to reduce the amount of uric acid in the blood and prevent attacks of gout. It is typically used for long-term management of gout and can also be used to prevent hyperuricemia associated with cancer treatments.Goutex 80mg is usually available in tablet form, and it\'s important to consult with a healthcare professional before using this medication. It\'s also important to follow the instructions carefully, especially if you have a history of liver or kidney disease, to avoid any potential side effects or interactions. Some common side effects of Febuxostat include nausea, diarrhea, and headache', 95, '2/3/2024', 8, 'Goutex 80mg.webp'),
(68, 'Amaryl 2mg', 'Amaryl (glimepiride) is a medication used to treat type 2 diabetes. It works by helping the pancreas produce more insulin and by helping the body use insulin more effectively. The standard starting dose of Amaryl is usually 1 to 2 milligrams (mg) once daily, taken with breakfast or the first main meal of the day. However, the exact dose and timing of Amaryl may vary depending on individual factors such as age, weight, other medications being taken, and kidney or liver function. It\'s important to follow your doctor\'s instructions carefully and to report any side effects or changes in blood sugar levels while taking this medication', 48, '2/3/2024', 11, 'Amaryl 2mg.webp'),
(69, 'Capoten 50mg', 'Capoten (captopril) is a medication used to treat high blood pressure, heart failure, and certain kidney disorders. It works by relaxing blood vessels and increasing the amount of urine produced by the kidneys.The usual starting dose of Capoten for treating hypertension is 25 milligrams (mg) two or three times daily. The dose may be increased gradually up to a maximum of 150 mg per day if needed. For heart failure, the typical starting dose is 6.25 mg three times daily, with gradual increases up to a maximum of 50 mg four times daily.It\'s important to take Capoten exactly as prescribed by your doctor and to report any side effects or changes in blood pressure or kidney function while taking this medication. Capoten may interact with other medications, so it\'s important to inform your doctor of all other medications you are taking before starting treatment with Capoten.', 15, '2/3/2024', 11, 'Capoten 50mg.webp'),
(72, 'Glucovance', 'Glucovance (glyburide and metformin) is a combination medication used to treat type 2 diabetes. Glyburide works by stimulating the pancreas to release more insulin, while metformin helps to decrease the amount of glucose produced by the liver and increase the body\'s sensitivity to insulin.The usual starting dose of Glucovance is one tablet taken once or twice daily with meals. The dosage may be increased gradually over time, depending on your response to the medication and any other medical conditions you may have. It\'s important to take this medication exactly as prescribed by your doctor and to follow a healthy diet and exercise regimen while taking it.\n\nGlucovance may interact with other medications, so it\'s important to inform your doctor of all other medications you are taking before starting treatment with this medication. Common side effects of Glucovance include nausea, vomiting, diarrhea, and stomach upset. These side effects often improve over time, but if they persist or become severe, you should contact your doctor.Additionally, Glucovance can cause a rare but serious condition called lactic acidosis, especially in people with kidney or liver disease, so it\'s important to report any symptoms of weakness, muscle pain, or difficulty breathing to your doctor immediately. Glucovance should not be used during pregnancy or breastfeeding without consulting with your doctor\nIt\'s important to take Glucophage exactly as prescribed by your doctor and to follow a healthy diet and exercise regimen while taking this medication. Glucophage may interact with other medications, so it\'s important to inform your doctor of all other medications you are taking before starting treatment with Glucophage.Common side effects of Glucophage include nausea, vomiting, diarrhea, and stomach upset. These side effects often improve over time, but if they persist or become severe, you should contact your doctor. Additionally, Glucophage can cause a rare but serious condition called lactic acidosis, especially in people with kidney or liver disease, so it\'s important to report any symptoms of weakness, muscle pain, or difficulty breathing to your doctor immediately.', 29, '2/3/2024', 11, 'Glucovance.webp'),
(78, 'Fluca', 'Fluca is a brand name for an eye drop solution used to treat certain eye conditions such as inflammation, irritation, allergies, and dryness.The Conjyclear solution contains a combination of active ingredients such as diclofenac, phenylephrine, and benzalkonium chloride, which work to reduce inflammation and irritation, and increase tear production. However, the use of any medication should be under the supervision of a treating physician, and eye drops prescribed for one person should not be used by another even if symptoms are similar.', 18, '2/3/2024', 15, 'Fluca.webp'),
(81, 'Tobradex', 'Tobradex is a brand name for a prescription eye medication that contains two active ingredients: tobramycin and dexamethasone. Tobramycin is an antibiotic that works by killing certain bacterial infections in the eye, while dexamethasone is a corticosteroid that helps to reduce inflammation and swelling.Tobradex eye drops are used to treat bacterial eye infections that are accompanied by inflammation. The medication is usually applied topically to the affected eye(s), as directed by a healthcare professional.As with any prescription medication, it is important to follow the instructions provided by your healthcare provider or pharmacist when using Tobradex. In addition, you should inform your healthcare provider of any other medications you are taking, including over-the-counter medications and supplements, to avoid any potential drug interactions. You should also report any side effects, such as irritation, redness, or itching, to your healthcare provider promptly', 40, '2/3/2024', 15, 'Tobradex.webp'),
(83, 'Moodapex 50mg', 'Moodapex 50mg is a medication that contains the active ingredient Sertraline. It is commonly used to treat major depressive disorder, obsessive-compulsive disorder, panic disorder, post-traumatic stress disorder, social anxiety disorder, and premenstrual dysphoric disorder.Sertraline belongs to a class of medications called selective serotonin reuptake inhibitors (SSRIs), which work by increasing the amount of serotonin in the brain. This can help improve mood, appetite, sleep, and energy levels in people with depression or other mood disorders.It\'s important to note that Moodapex 50mg should only be taken under the guidance of a healthcare professional, as it can cause certain side effects and may interact with other medications or medical conditions.', 60, '2/3/2024', 12, 'Moodapex 50mg.webp'),
(87, 'Tryptizol 25', 'Tryptizol 25 is a brand name for a medication called amitriptyline. This medication belongs to a class of drugs known as tricyclic antidepressants, and is used primarily to treat depression, anxiety, and certain types of pain conditions such as neuropathic pain and migraines.In addition to its primary uses, Tryptizol 25 may also be used to treat other conditions such as insomnia, irritable bowel syndrome (IBS), and post-traumatic stress disorder (PTSD), among others.It\'s important to note that the use of Tryptizol 25 should only be done under the supervision and guidance of a healthcare professional, as there are potential side effects and risks associated with this medication', 18, '2/3/2024', 12, 'Tryptizol 25.webp'),
(88, 'Mondo', 'panthenol is considered its main and essential ingredient, as it works to reduce skin irritation and helps in healing wounds and rebuilding damaged skin tissues completely. It also contains chamomile oil extract, which soothes irritated skin that causes redness and itching, as it is rich in antioxidants and resists microbes. It contains borax, which fights the formation of germs and bacteria that cause skin irritation, itching, redness, and severe burning sensation', 55, '2/3/2024', 16, 'Mondo.webp'),
(89, 'Nataria', 'Topical Cream Supports Skin Renewal (normal & healthy skin repair)\nRenovating Formula With Antimicrobial Ingredients\nProduct information:\nNATARIA Cream Promotes wound healing & skin Epithelialization.\nNATARIA Cream Has broad spectrum antiseptic action & Suppresses aggressive inflammation.\nNATARIA Cream Renders natural optimum moisturization that accelerates wound healing.\nNATARIA Cream Is topical healing stimulator cream for skin wounds & burns care\nProduct ingredients:\nPanthenol\nCalendula extract\nChlorhexidine\nTriclosan\nParaffin oil\nProduct directions:\nA suitable amount of NATARIA CREAM is to be applied on the skin & rubbed gently for 2-3 times daily.\nPrecautions:\n– For external use only.\n– Avoid contact with eyes.\nPackage:\nA tube of 50 gm content', 55, '2/3/2024', 16, 'Nataria.webp'),
(90, 'Nizapex', 'Nizapex appears to be an anti-dandruff product that can be used to treat dandruff on the scalp. However, it is important to consult a dermatologist before using any hair care product, as some products may cause allergic reactions or other side effects', 37, '2/3/2024', 16, 'Nizapex.webp'),
(92, 'Tarolimus', 'medication used to suppress the immune system in order to prevent rejection of transplanted organs. It is also used to treat some autoimmune diseases such as eczema and psoriasis.Tacrolimus works by inhibiting the production of certain cells in the immune system that are involved in transplant rejection or autoimmune reactions.Like all medications, it has potential side effects such as increased risk of infections, high blood pressure, kidney damage, and skin problems. Therefore, it is important to use this medication only under the supervision of a qualified healthcare professional who can monitor for potential adverse effects and adjust the dose as needed.', 77, '2/3/2024', 16, 'Tarolimus.webp'),
(93, 'Terbin', 'medication used to suppress the immune system in order to prevent rejection of transplanted organs. It is also used to treat some autoimmune diseases such as eczema and psoriasis.Tacrolimus works by inhibiting the production of certain cells in the immune system that are involved in transplant rejection or autoimmune reactions.Like all medications, it has potential side effects such as increased risk of infections, high blood pressure, kidney damage, and skin problems. Therefore, it is important to use this medication only under the supervision of a qualified healthcare professional who can monitor for potential adverse effects and adjust the dose as needed.', 37, '2/3/2024', 16, 'Terbin.webp');

-- --------------------------------------------------------

--
-- Table structure for table `medicine_request`
--

CREATE TABLE `medicine_request` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `medicine_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `password` int(50) NOT NULL,
  `Accept` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `medicine_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `password` int(50) NOT NULL,
  `Accept` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`id`, `user_id`, `medicine_id`, `created_at`, `password`, `Accept`) VALUES
(17, 41, 18, '2023-04-28 03:44:58', 1, 'Accepted'),
(19, 41, 18, '2023-04-28 03:48:14', 2, 'Accepted'),
(20, 36, 17, '2023-04-28 05:38:25', 8, ''),
(22, 34, 19, '2023-04-28 05:42:33', 4, ''),
(23, 34, 19, '2023-04-28 05:42:35', 4, ''),
(25, 34, 19, '2023-04-28 05:42:40', 4, ''),
(26, 34, 19, '2023-04-28 05:42:40', 4, ''),
(27, 34, 19, '2023-04-28 05:42:48', 4, ''),
(28, 34, 16, '2023-04-28 05:47:27', 9, ''),
(29, 34, 26, '2023-04-28 05:48:40', 23, 'Accept'),
(30, 36, 17, '2023-04-28 23:47:37', 5, ''),
(31, 34, 18, '2023-04-30 08:28:54', 8, 'Accept'),
(32, 36, 18, '2023-04-30 08:33:40', 12, ''),
(33, 36, 18, '2023-05-04 07:39:07', 7, 'Accepted'),
(37, 38, 34, '2023-05-08 09:05:33', 66, 'Accepted');

-- --------------------------------------------------------

--
-- Table structure for table `search`
--

CREATE TABLE `search` (
  `search_id` int(11) NOT NULL,
  `searchTerm` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `search`
--

INSERT INTO `search` (`search_id`, `searchTerm`, `user_id`) VALUES
(26, '', 0),
(27, 'Co-Tareg	', 0),
(28, '', 0),
(29, 'Co-Tareg	', 0),
(30, '', 0),
(31, 'Coveram 5/5222', 0),
(32, '', 0),
(33, '', 0),
(34, 'Adancor', 0),
(35, '', 0),
(36, '', 0),
(37, '', 0),
(38, 'Concor Core 5 Mg', 0),
(39, '', 0),
(40, '7', 0),
(41, '', 0),
(42, '8', 0),
(43, '', 0),
(44, 'c', 0),
(45, 'cc', 0),
(46, 'Cc', 0),
(47, '', 0),
(48, '', 0),
(49, 'Exforge 160', 0),
(50, '', 0),
(51, '', 0),
(52, 'Exforge HCT 21', 0),
(53, 'dsadsadssda', 0),
(54, '', 0),
(55, 'a', 0),
(56, 'as', 0),
(57, 'asd', 0),
(58, 'asda', 0),
(59, 'asdas', 0),
(60, 'sfdgasa', 0),
(61, 'sfdgasa', 0),
(62, '7', 0),
(63, '7', 0),
(64, '7', 0),
(65, 'Concor Core', 0),
(66, 'Exforge HCT 2', 0),
(67, 'sfdgasa', 0),
(70, 'Avamys', 0),
(72, 'Tareg 80	', 0),
(73, 'Adancor', NULL),
(74, 'Concor Core 10 Mg	', NULL),
(76, 'Co-Tareg	', NULL),
(85, 'Norflex', 38),
(86, 'Norflex', 38),
(87, 'Tareg 80	', 38),
(88, 'Avamys', 39),
(89, 'Activent SR	', 38),
(90, '8', 38),
(91, 'EEE', 38);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'in active' COMMENT 'active ->login \r\ninactive ->logout\r\n',
  `token` varchar(255) NOT NULL,
  `role` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=> user normal\r\n1=> admin',
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `phone`, `status`, `token`, `role`, `name`) VALUES
(37, 'Admin@yahoo.com', '$2b$10$nKKYcOdxMMbe8ADeZ1qFYeUMd5hce30PgfCjRSM3CyBsEsD2fVqtu', '01018025973', 'active', 'fdb27428cdbf5f9e247d889f44a8d833', 1, 'Admin123Aa'),
(38, 'Yousef@gmail.com', '$2b$10$DoS27EZ7FUKxBL2LXs1aNeaEpR950qvQLgzudKcT9irqLo2pQnDS2', '0221154551', 'in active', '33b63ce03e69cbfe6c0137b3e032b562', 0, 'YoussefA3d0'),
(39, 'Abdo@gmail.com', '$2b$10$m6Z.q/I8hJ1vB8eUrv9Upuft0frP6Z4JXTwwVVQtbLkdduiW/Q7ti', '0100110', 'in active', '8784d791ca0dcebf7390d3e72a4c8613', 0, 'AbdoEssam11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoryes`
--
ALTER TABLE `categoryes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id_constraint` (`category_id`);

--
-- Indexes for table `medicine_request`
--
ALTER TABLE `medicine_request`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id_constraint` (`user_id`),
  ADD KEY `medicine_id_constraint` (`medicine_id`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `medicine_id` (`medicine_id`);

--
-- Indexes for table `search`
--
ALTER TABLE `search`
  ADD PRIMARY KEY (`search_id`),
  ADD KEY `search_id_constraint` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoryes`
--
ALTER TABLE `categoryes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `medicine_request`
--
ALTER TABLE `medicine_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `search`
--
ALTER TABLE `search`
  MODIFY `search_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `medicines`
--
ALTER TABLE `medicines`
  ADD CONSTRAINT `category_id_constraint` FOREIGN KEY (`category_id`) REFERENCES `categoryes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `medicine_request`
--
ALTER TABLE `medicine_request`
  ADD CONSTRAINT `medicine_id_constraint` FOREIGN KEY (`medicine_id`) REFERENCES `medicines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_id_constraint` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `search`
--
ALTER TABLE `search`
  ADD CONSTRAINT `search_id_constraint` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
