import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '8f7e53de-7727-4a98-8867-493d0b0580be',
};

export const sampleWithPartialData: IAuthority = {
  name: 'dfcfd1b3-3372-4888-b20e-0ef3df68f0fc',
};

export const sampleWithFullData: IAuthority = {
  name: '5ff81c45-5fd9-4e19-be47-d6190017d2d3',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
