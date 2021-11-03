import axios from 'axios';
// import {getAllDemographics} from '../services/demographics.service';
import {demographicsService} from '../services/index.js'

jest.mock('axios')

describe("check if axios methods have been called and mock their response", () => {
    test("GetData() of service should call axios.get()", () => {
        demographicsService.getAllDemographics();
        expect(axios.get).toHaveBeenCalled();
    });

    test("GetData() of service should call axios.get() only once", () => {
        demographicsService.getAllDemographics();
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test("GetData() of service should call axios.get() to get info of user with id 1", () => {
        demographicsService.getAllDemographics();
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/demographics/2');
    });
});