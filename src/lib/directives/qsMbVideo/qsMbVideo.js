/*global define*/
define( [
	'qvangular',
	'./../../js/extensionUtils',
	'text!./qsMbVideo.ng.html',
	'text!./videojs.min.css',

	//no return value
	'./videojs.min'

], function ( qvangular, extensionUtils, ngTemplate, videojsCss ) {
	'use strict';

	qvangular.directive( 'qsMbVideo', function () {

		extensionUtils.addStyleToHeader( videojsCss );

		return {
			restrict: "E",
			template: ngTemplate,
			scope: {
				objectId: '=',
				videoType: '=',
				videoSource: '='
			},
			link: function ( $scope, $element, $attrs ) {

				var $video,
					player;

				//function addVideo () {
				//	$video = $( document.createElement( 'video' ) );
				//	$video.attr( 'width', 400 );
				//	$video.attr( 'height', 400 );
				//	$video.attr( 'controls' );
				//	$video.attr( 'data-setup', '{}' );
				//	$video.addClass( 'video-js' );
				//	$video.addClass( 'vjs-default-skin' );
				//	$element.append( $video );
				//
				//	configVideo();
				//
				//};
				//addVideo();

				function configVideo () {

					var options = {};

					if ( !player ) {
						player = videojs( 'myVideo', options, function () {
							var mPlayer = this;

							mPlayer.src( {
									type: $scope.videoType,
									src: $scope.videoSource
								}
							);
						} );
					} else {
						player.src(
							{
								type: $scope.videoType,
								src: $scope.videoSource
							}
						)
					}

				};

				$scope.$on( '$destroy', function () {
					player.dispose();
				} );

				$scope.$watchCollection( '[videoType, videoSource]', function ( newVal ) {
					configVideo();
				} );

			}
		}

	} );

} );