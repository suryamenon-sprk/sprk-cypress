const ENV_BASE_URL = Cypress.env("BASE_URL")
let TOKEN = null

const API_URL = `${ENV_BASE_URL}/api/auth/emp/1`
const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}


// FIXTURE
var payload_register = null
before(() => {
    cy.fixture("EmployeeDoc/update-emp-body").then((data) => {
        payload_register = data
    })


// TOKEN
    cy.request({
        method: HttpMethod.POST, 
        url: `${ENV_BASE_URL}/api/auth/login`, 
        failOnStatusCode: false,
        body: {
            email: "kavita@sprktechnologies.in",
            password: 'Kavita@123',
        },
    }).then((response) => {
        expect(response.status).to.equal(200); 
        TOKEN = response.body.token; 
    });

})


// DESCRIPTION
describe('API-updateEmployee Test', () => {

    // TEST
    it('Update - Employee', () => {

        
        payload_register.forEach((testCase) => {
            cy.request({
                method: HttpMethod.POST, 
                url: `${ENV_BASE_URL}/api/auth/login`, 
                failOnStatusCode: false,
                body: {
                    email: "kavita@sprktechnologies.in",
                    password: 'Kavita@123',
                },
            }).then((response) => {
                expect(response.status).to.equal(200); 
                TOKEN = response.body.token; 
            });
            

            let bodyPayload = {
                firstname: testCase.firstname,
                middlename: testCase.middlename,
                lastname: testCase.lastname,
                phone: testCase.phone,
                alt_phone: testCase.alt_phone,
                gender: testCase.gender,
                email: testCase.email,
                alt_email: testCase.alt_email,
                blood_group: testCase.blood_group,
                marital_status: testCase.marital_status,
                nationality: testCase.nationality,
                current_flat_house: testCase.current_flat_house,
                current_building_apartment: testCase.current_building_apartmen,
                current_area_street_sector_village: testCase.current_area_street_sector_village,
                current_landmark: testCase.current_landmark,
                current_pin_code: testCase.current_pin_code,
                current_city_town: testCase.current_city_town,
                current_state: testCase.current_state,
                current_country: testCase.current_country,
                permanent_flat_house: testCase.permanent_flat_house,
                permanent_building_apartment: testCase.permanent_building_apartment,
                permanent_area_street_sector_village: testCase.permanent_area_street_sector_village,
                permanent_landmark: testCase.permanent_landmark,
                permanent_pin_code: testCase.permanent_pin_code,
                permanent_city_town: testCase.permanent_city_town,
                permanent_state: testCase.permanent_state,
                permanent_countr: testCase.permanent_countr,
                university: testCase.university,
                degree: testCase.degree,
                stream: testCase.stream,
                college: testCase.college,
                cgpa: testCase.cgpa,
                passing_year: testCase.passing_year,
                skill_set: testCase.skill_set,
                experience: testCase.experience,
                exp_years: testCase.exp_years,
                domain: testCase.domain,
                eme_firstname: testCase.eme_firstname,
                eme_middlename: testCase.emp_middlename,
                eme_lastname: testCase.emp_lastname,
                eme_phone: testCase.eme_phone,
                eme_email: testCase.emp_email,
                eme_relation: testCase.eme_relation,
                physician_name: testCase.physician_name,
                physician_phone: testCase.physician_phone,
                medical_history: testCase.medical_history,
                medical_conditions: testCase.medical_conditions
            }


            // Make the update request using the latest token
            cy.request({
                method: HttpMethod.PATCH,
                url: API_URL,
                failOnStatusCode: false,
                body: bodyPayload,
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }).then((response) => {
                if(TOKEN != null)
                expect(response.status).to.equal(200);
                else
                expect(response.status).to.equal(403);
            });

            
           
        }); // forEach
        
       
    
    })
    
        


    });
;
