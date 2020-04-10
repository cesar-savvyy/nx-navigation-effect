module.exports = {
  name: 'nx-navigation-effect',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-navigation-effect',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
